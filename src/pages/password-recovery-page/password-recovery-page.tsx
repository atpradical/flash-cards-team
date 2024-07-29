import { useState } from 'react'

import { ForgotPasswordForm, ForgotPasswordFormValues } from '@/components/forms'
import { CheckEmail } from '@/components/ui/layout-components'
import { usePwdRecoverMutation } from '@/services'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const PasswordRecoveryPage = () => {
  const [email, setEmail] = useState('')
  const [pwdRecover, { isLoading, isSuccess }] = usePwdRecoverMutation()

  const pwdRecoverHandler = (formData: ForgotPasswordFormValues) => {
    setEmail(formData.email)
    pwdRecover(formData)
  }

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        {isSuccess ? (
          <CheckEmail email={email} />
        ) : (
          <ForgotPasswordForm onSubmit={pwdRecoverHandler} />
        )}
      </FlexContainer>
    </Page>
  )
}
