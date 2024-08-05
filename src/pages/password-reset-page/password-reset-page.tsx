import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CreateNewPasswordForm, CreateNewPasswordFormValues } from '@/components/forms'
import { usePwdResetMutation } from '@/services'
import { PATH } from '@/shared/enums'
import { Nullable } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'
import { FormErrorData, getErrorMessageData } from '@/shared/utils'

export const ResetPasswordPage = () => {
  const [formErrors, setFromErrors] = useState<Nullable<FormErrorData[] | string>>(null)
  const { token = '' } = useParams()
  const navigate = useNavigate()

  const [pwdReset, { isLoading }] = usePwdResetMutation()

  const resetPasswordHandler = async (formData: CreateNewPasswordFormValues) => {
    try {
      await pwdReset({ ...formData, token }).unwrap()
      toast.success(`Password reset successful`)
      navigate(PATH.SIGN_IN)
    } catch (e) {
      const errors = getErrorMessageData(e)

      setFromErrors(errors)
    }
  }

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        <CreateNewPasswordForm errors={formErrors} onSubmit={resetPasswordHandler} />
      </FlexContainer>
    </Page>
  )
}
