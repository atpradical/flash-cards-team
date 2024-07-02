import { CreateNewPasswordForm } from '@/components/forms'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const ResetPassword = () => {
  const resetPasswordHandler = (value: any) => {
    console.log(value)
    console.log('send new password request to server!')
  }

  return (
    <Page>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        <CreateNewPasswordForm onSubmit={resetPasswordHandler} />
      </FlexContainer>
    </Page>
  )
}
