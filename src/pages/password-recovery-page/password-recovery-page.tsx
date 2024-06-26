import { ForgotPasswordForm } from '@/components/forms'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const PasswordRecoveryPage = () => {
  const foo = () => {
    console.log('This is СheckEmail component, I need user email from RTK Query cash to display')

    return 'tes@test.com'
  }

  return (
    <Page>
      <FlexContainer jc={'center'}>
        <ForgotPasswordForm onSubmit={foo} />
      </FlexContainer>
    </Page>
  )
}
