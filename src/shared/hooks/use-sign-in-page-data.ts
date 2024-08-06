import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { LoginFormValues } from '@/components/forms'
import { useLoginMutation } from '@/services'
import { PATH } from '@/shared/enums'
import { getErrorMessageData } from '@/shared/utils/get-error-message'

export const useSignInPageData = () => {
  const navigate = useNavigate()
  const [login, { error, isError, isLoading, isSuccess }] = useLoginMutation()

  useEffect(() => {
    if (error) {
      const errorMessage = getErrorMessageData(error)

      if (typeof errorMessage === 'string') {
        toast.error(errorMessage)
      }
    }

    if (isSuccess) {
      navigate(PATH.ROOT)
    }
  }, [error, isSuccess, navigate])

  const signInHandler = useCallback(
    async (formData: LoginFormValues) => {
      await login(formData)
    },
    [login]
  )

  return { isError, isLoading, signInHandler }
}
