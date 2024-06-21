import { ForgotPasswordForm } from '@/components/forms/forgot-password-form'
import { CheckEmail } from '@/components/ui/check-email'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Layout } from '@/shared/ui/layout'
import { Page } from '@/shared/ui/page'
import { CardsHeader } from '@/components/ui/cards-header'

export function App() {
  // just mockedFunction, will be deleted later.
  const foo = (value: any) => {
    console.log(value)
  }

  return (
    <Layout>
      <CardsHeader isAuthorized={true} />
      <Page>
        <FlexContainer gap={'10px'} jc={'center'}>
          <ForgotPasswordForm onSubmit={foo} />
          <CheckEmail email={'test@test.com'} />
        </FlexContainer>
      </Page>
    </Layout>
  )
}
