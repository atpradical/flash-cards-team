import { Grade } from '@/components/ui/grade'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Layout } from '@/shared/ui/layout'
import { Page } from '@/shared/ui/page'
import { CardsHeader } from '@/components/ui/cards-header'

export function App() {
  return (
    <Layout>
      <CardsHeader isAuthorized={true} />
      <Page>
        <FlexContainer gap={'10px'} jc={'center'}>
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
