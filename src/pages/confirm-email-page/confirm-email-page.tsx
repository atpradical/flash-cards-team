import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ConfirmEmail } from '@/components/ui/layout-components/confirm-email'
import { LinkExpired } from '@/components/ui/layout-components/link-expired'
import { useVerifyEmailMutation } from '@/services'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

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
      <FlexContainer jc={'center'} pd={'0 20px'}>
        {isSuccess && <ConfirmEmail />}
        {isError && <LinkExpired />}
      </FlexContainer>
    </Page>
  )
}
