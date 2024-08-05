import { useParams } from 'react-router-dom'

import { CreateNewPasswordForm, FormValues } from '@/components/forms'
import { useResetPasswordMutation } from '@/services'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const ResetPasswordPage = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation()

  const { token } = useParams()

  const resetPasswordHandler = (formData: FormValues) => {
    if (token) {
      resetPassword({ password: formData.password, token })
        .then(() => console.log('Password reset successfully!'))
        .catch(error => console.error('Failed to reset password', error))
    } else {
      console.error('No token found')
    }
  }

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        <CreateNewPasswordForm onSubmit={resetPasswordHandler} />
      </FlexContainer>
    </Page>
  )
}
