import { toast } from 'react-toastify'

import { router } from '@/app'
import { ERROR_STATUS, SERVER_ERROR_STATUS } from '@/shared/enums'
import { getErrorMessageData } from '@/shared/utils'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()

/* Creates instance for requests: */
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',
  // credentials: 'include',
  /* To use JWT -> add Header 'Authorization', `Bearer ${token}` to every request. */
  prepareHeaders: headers => {
    const token = localStorage.getItem('accessToken')

    if (headers.get('Authorization')) {
      return headers
    }
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  },
})

/* High Order Function. Calls to every request to backend. Takes the arguments of the called endpoint. */
export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()

  /* Send request and get request result */
  let result = await baseQuery(args, api, extraOptions)

  if (result.error) {
    // checking whether the mutex is locked
    if (result.error.status === ERROR_STATUS.UNAUTHORIZED) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire()

        try {
          const refreshToken = localStorage.getItem('refreshToken')

          /* Send refreshToken request */
          const refreshResult = (await baseQuery(
            {
              headers: { Authorization: `Bearer ${refreshToken}` },
              method: 'POST',
              url: '/v2/auth/refresh-token',
            },
            api,
            extraOptions
          )) as any

          if (refreshResult.data) {
            /* success case -> save new accessToken and refreshToken for further use in requests */
            localStorage.setItem('accessToken', refreshResult.data.accessToken.trim())
            localStorage.setItem('refreshToken', refreshResult.data.refreshToken.trim())
            /* and retry the initial query */
            result = await baseQuery(args, api, extraOptions)
          } else {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
          }
        } finally {
          // release must be called once the mutex should be released again.
          release()
        }
      } else {
        // wait until the mutex is available without locking it
        await mutex.waitForUnlock()
        result = await baseQuery(args, api, extraOptions)
      }
    } else if (result.error.status in ERROR_STATUS) {
      const errorMessage = getErrorMessageData(result.error)

      if (typeof errorMessage === 'string') {
        toast.error(errorMessage)
      }
    } else if (result.error.status in SERVER_ERROR_STATUS) {
      await router.navigate('/500')
    }
  }

  return result
}
