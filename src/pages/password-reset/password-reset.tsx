import { useNavigate, useParams } from 'react-router-dom'

import { CreateNewPasswordForm, CreateNewPasswordFormValues } from '@/components/forms'
import { usePwdResetMutation } from '@/services'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const ResetPassword = () => {
  const { token = '' } = useParams()
  const navigate = useNavigate()

  const [pwdReset, { isLoading }] = usePwdResetMutation()

  const resetPasswordHandler = (formData: CreateNewPasswordFormValues) => {
    pwdReset({ ...formData, token }).then(() => navigate(PATH.SIGN_IN))
  }

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        <CreateNewPasswordForm onSubmit={resetPasswordHandler} />
      </FlexContainer>
    </Page>
  )
}
