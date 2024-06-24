import { ForgotPasswordForm } from '@/components/forms/forgot-password-form'
import { Actions } from '@/components/ui/actions'
import { CardsHeader } from '@/components/ui/cards-header'
import { CheckEmail } from '@/components/ui/check-email'
import { VARIANT } from '@/shared/enums/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Layout } from '@/shared/ui/layout'
import { Page } from '@/shared/ui/page'

export function App() {
  // just mockedFunction, will be deleted later.
  const foo = (value: any) => {
    /* eslint-disable no-console */
    // temp. todo: enable @eslint rule back
    console.log(value)
  }

  return (
    <Layout>
      <CardsHeader isAuthorized />
      <Page>
        <FlexContainer gap={'10px'} jc={'center'}>
          <ForgotPasswordForm onSubmit={foo} />
          <CheckEmail email={'test@test.com'} />
          <div>
            <Actions
              onDelete={() => console.log('render1')}
              onEdit={() => console.log('render2')}
              onLearn={() => console.log('render3')}
            />
            <Actions
              onDelete={() => console.log('render1')}
              onEdit={() => console.log('render2')}
              onLearn={() => console.log('render3')}
              variant={VARIANT.ONLY_EDITS}
            />
            <Actions
              onDelete={() => console.log('render1')}
              onEdit={() => console.log('render2')}
              onLearn={() => console.log('render3')}
              variant={VARIANT.ONLY_LEARN}
            />
          </div>
        </FlexContainer>
      </Page>
    </Layout>
  )
}
