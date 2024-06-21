import { ForgotPasswordForm } from '@/components/forms/forgot-password-form'
import { Actions } from '@/components/ui/actions'
import { CheckEmail } from '@/components/ui/check-email'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'
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
      <Header />
      <Page>
        <FlexContainer gap={'10px'} jc={'center'}>
          <ForgotPasswordForm onSubmit={foo} />
          <CheckEmail email={'test@test.com'} />
          <div>
            <Actions
              onDelete={() => console.log('render')}
              onEdit={() => console.log('render')}
              onPlay={() => console.log('render')}
            />
          </div>
        </FlexContainer>
      </Page>
    </Layout>
  )
}
