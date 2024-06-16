import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { SignUpForm } from '@/components/ui/forms/sign-up-form'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledCheckbox } from '@/shared/ui/form-components/controlled-checkbox'
import { Header } from '@/shared/ui/header'
import { Layout } from '@/shared/ui/layout'
import { Page } from '@/shared/ui/page'

type SomeFormValues = {
  rememberMe: boolean
}

export function App() {
  const { control, handleSubmit } = useForm<SomeFormValues>()

  const foo = handleSubmit(data => {
    console.log(data)
  })

  return (
    <Layout>
      <Header />
      <Page>
        <FlexContainer>
          <form onSubmit={foo}>
            <div>Hi Team 🤘🤘🤘 Controlled Checkbox example:</div>
            <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
            <Button>Submit</Button>
          </form>
          <SignUpForm />
        </FlexContainer>
      </Page>
    </Layout>
  )
}
