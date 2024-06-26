import { SignUpForm } from '@/components/forms'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const SignUpPage = () => {
  const signUpHandler = (value: any) => {
    console.log(value)
    console.log('send sign-in request to server!')
  }

  return (
    <Page>
      <FlexContainer jc={'center'}>
        <SignUpForm onSubmit={signUpHandler} />
      </FlexContainer>
    </Page>
  )
}
