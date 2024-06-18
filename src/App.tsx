import { SignUpForm } from '@/components/ui/forms/sign-up-form'
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
        <FlexContainer jc={'center'}>
          <SignUpForm onSubmit={foo} />
        </FlexContainer>
      </Page>
    </Layout>
  )
}
