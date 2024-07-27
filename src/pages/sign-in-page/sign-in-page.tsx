import { useNavigate } from 'react-router-dom'

import { SignInForm } from '@/components/forms'
import { LoginArgs, useLoginMutation } from '@/services'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const SignInPage = () => {
  const [login, { data: tokens, isLoading }] = useLoginMutation()

  const navigate = useNavigate()

  const signInHandler = async (value: LoginArgs) => {
    try {
      await login(value).unwrap()
      navigate(PATH.DECK_LIST)
    } catch (e: any) {
      console.error('e', e)
    }
  }

  console.log('tokens', tokens)

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        <SignInForm onSubmit={signInHandler} />
      </FlexContainer>
    </Page>
  )
}
