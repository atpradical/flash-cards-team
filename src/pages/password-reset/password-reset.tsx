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
      <FlexContainer jc={'center'}>
        <CreateNewPasswordForm onSubmit={resetPasswordHandler} />
      </FlexContainer>
    </Page>
  )
}
