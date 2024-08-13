import { useState } from 'react'

import { ForgotPasswordForm, ForgotPasswordFormValues } from '@/components/forms'
import { CheckEmail } from '@/components/ui/layout-components'
import { useRecoveryPasswordMutation } from '@/services'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const PasswordRecoveryPage = () => {
  const [recoverPassword, { isLoading, isSuccess }] = useRecoveryPasswordMutation()
  const [email, setEmail] = useState('')
  const [forRecoveryPassword, setForRecoveryPassword] = useState(false)

  const recoveryPasswordHandler = ({ email }: ForgotPasswordFormValues) => {
    recoverPassword({ email })
    setEmail(email)
    setForRecoveryPassword(true)
  }

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        {isSuccess ? (
          <CheckEmail email={email} forRecoveryPassword={forRecoveryPassword} />
        ) : (
          <ForgotPasswordForm onSubmit={recoveryPasswordHandler} />
        )}
      </FlexContainer>
    </Page>
  )
}
