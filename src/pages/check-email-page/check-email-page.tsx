import { CheckEmail } from '@/components/ui/layout-components'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const CheckEmailPage = () => {
  const foo = () => {
    return 'tes@test.com'
  }

  return (
    <Page>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        <CheckEmail email={foo()} />
      </FlexContainer>
    </Page>
  )
}
