import { Error404 } from '@/components/ui/error-404'
import { Page } from '@/shared/ui/page'
import { FlexContainer } from '@/shared/ui/flex-container'

export const Error404Page = () => {
  return (
    <Page mt={'130px'}>
      <FlexContainer jc={'center'}>
        <Error404 />
      </FlexContainer>
    </Page>
  )
}
