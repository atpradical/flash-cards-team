import { SignInForm } from '@/components/forms'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const SignInPage = () => {
  const signInHandler = (value: any) => {
    console.log(value)
    console.log('send sign-in request to server!')
  }

  return (
    <Page>
      <FlexContainer jc={'center'}>
        <SignInForm onSubmit={signInHandler} />
      </FlexContainer>
    </Page>
  )
}
