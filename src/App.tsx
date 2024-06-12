import { Button } from '@/components/ui/button'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Layout } from '@/shared/ui/layout'

import { Header } from './shared/ui/header'
import { Page } from './shared/ui/page'

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
        </FlexContainer>
      </Page>
    </Layout>
  )
}
