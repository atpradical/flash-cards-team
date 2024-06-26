import { Error404 } from '@/components/ui/error-404'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const Error404Page = () => {
  return (
    <Page mt={'130px'}>
      <FlexContainer jc={'center'}>
        <Error404 text={'error'} />
      </FlexContainer>
    </Page>
  )
}
