import { Page } from '@/shared/ui/page'
import { useParams } from 'react-router-dom'

import { useVerifyEmailMutation } from '@/services'

import { ConfirmEmail } from './confirm-email'
import { PATH } from '@/shared/enums'

export const ConfirmEmailPage = () => {
  const { token } = useParams()

  const [verifyEmail, { isLoading, isSuccess, isError }] = useVerifyEmailMutation()

  const verifyEmailHandler = () => {
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
  }
  console.log('isSuccess', isSuccess)
  console.log('isError', isError)
  console.log('token', token)
  return (
    <Page load={isLoading}>
      {isSuccess ? (
        <ConfirmEmail
          path={PATH.SIGN_IN}
          title={'You confirmed your email successfully'}
          buttonText={'Back to home page'}
          description={false}
        />
      ) : (
        <ConfirmEmail
          path={PATH.ROOT}
          title={'Link expired'}
          verifyEmail={verifyEmailHandler}
          buttonText={'Send email'}
          icon={false}
        />
      )}
    </Page>
  )
}
