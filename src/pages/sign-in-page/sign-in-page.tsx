import { useNavigate } from 'react-router-dom'

import { SignInForm } from '@/components/forms'
import { useLoginMutation } from '@/services'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const SignInPage = () => {
  const [login, { data: tokens, isLoading }] = useLoginMutation()
  const navigate = useNavigate()

  const signInHandler = async (value: any) => {
    await login(value)
    navigate(PATH.DECK_LIST)
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
