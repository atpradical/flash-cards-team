import { SignUpForm } from '@/components/forms'
import { Grade } from '@/components/ui/grade'
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
          <SignUpForm onSubmit={foo} />
          <FlexContainer fd={'column'} gap={'10px'}>
            <Grade />
            <Grade stars={3} />
            <Grade stars={5} />
          </FlexContainer>
        </FlexContainer>
      </Page>
    </Layout>
  )
}
