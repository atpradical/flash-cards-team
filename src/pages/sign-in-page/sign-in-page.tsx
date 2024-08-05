import { SignInForm } from '@/components/forms'
import { useSignInPageData } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const SignInPage = () => {
  const { isError, isLoading, signInHandler } = useSignInPageData()

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        <SignInForm isError={isError} onSubmit={signInHandler} />
      </FlexContainer>
    </Page>
  )
}
