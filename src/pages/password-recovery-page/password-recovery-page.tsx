import { useState } from 'react'
import { toast } from 'react-toastify'

import { ForgotPasswordForm, ForgotPasswordFormValues } from '@/components/forms'
import { CheckEmail } from '@/components/ui/layout-components'
import { usePwdRecoverMutation } from '@/services'
import { Nullable } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'
import { FormErrorData, getErrorMessageData } from '@/shared/utils'

export const PasswordRecoveryPage = () => {
  const [email, setEmail] = useState('')
  const [formErrors, setFromErrors] = useState<Nullable<FormErrorData[] | string>>(null)
  const [pwdRecover, { isLoading, isSuccess }] = usePwdRecoverMutation()

  const pwdRecoverHandler = async (formData: ForgotPasswordFormValues) => {
    setEmail(formData.email)
    setFromErrors(null)
    try {
      await pwdRecover(formData).unwrap()

      toast.warning(`Further instructions sent to ${formData.email}`)
    } catch (e) {
      const errors = getErrorMessageData(e)

      setFromErrors(errors)
    }
  }

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        {isSuccess ? (
          <CheckEmail email={email} />
        ) : (
          <ForgotPasswordForm errors={formErrors} onSubmit={pwdRecoverHandler} />
        )}
      </FlexContainer>
    </Page>
  )
}
