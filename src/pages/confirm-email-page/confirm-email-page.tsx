import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useVerifyEmailMutation } from '@/services'
import { PATH } from '@/shared/enums'
import { Page } from '@/shared/ui/page'

import { ConfirmEmail } from './confirm-email'

export const ConfirmEmailPage = () => {
  const { token } = useParams()

  const [verifyEmail, { isError, isLoading, isSuccess }] = useVerifyEmailMutation()

  useEffect(() => {
    if (token) {
      verifyEmail({ code: token })
        .unwrap()
        .then(() => console.log('Email verified successfully'))
        .catch(error => {
          if (error.status === 400) {
            console.log('Email has already been verified', error.status)
          }
          if (error.status === 404) {
            console.log('User not found', error.status)
          }
        })
    }
  }, [token])

  return (
    <Page load={isLoading}>
      {isSuccess && (
        <ConfirmEmail
          buttonText={'Back to home page'}
          description={false}
          path={PATH.SIGN_IN}
          title={'You confirmed your email successfully'}
        />
      )}
      {isError && (
        <ConfirmEmail
          buttonText={'Back to profile'}
          icon={false}
          path={PATH.PROFILE}
          title={'Link expired'}
        />
      )}
    </Page>
  )
}
