import { CheckEmail } from '@/components/ui/check-email'
import { ForgotPasswordForm } from '@/components/ui/forms/forgot-password-form'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'
import { Layout } from '@/shared/ui/layout'
import { Page } from '@/shared/ui/page'

export function App() {
  // just mockedFunction, will be deleted later.
  const foo = (value: any) => {
    console.log(value)
  }

  return (
    <Layout>
      <Header />
      <Page>
        <FlexContainer gap={'10px'} jc={'center'}>
          <ForgotPasswordForm onSubmit={foo} />
          <CheckEmail email={'test@test.com'} />
        </FlexContainer>
      </Page>
    </Layout>
  )
}
