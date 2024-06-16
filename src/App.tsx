import { Button } from '@/components/ui/button'
import { SignUpForm } from '@/components/ui/forms/sign-up-form'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'
import { Layout } from '@/shared/ui/layout'
import { Page } from '@/shared/ui/page'

export function App() {
  return (
    <Layout>
      <Header />
      <Page>
        <FlexContainer>
          <div>Hi Team 🤘🤘🤘</div>
          <div>
            <Button>Primary</Button>
            <Button variant={'secondary'}>Secondary</Button>
            <Button as={'a'} variant={'link'}>
              Button as link
            </Button>
          </div>
          <SignUpForm />
        </FlexContainer>
      </Page>
    </Layout>
  )
}
