import { useNavigate } from 'react-router-dom'

import { LoginFormValues, SignInForm } from '@/components/forms'
import { useLoginMutation } from '@/services'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const SignInPage = () => {
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()

  const signInHandler = (formData: LoginFormValues) => {
    login(formData)
      .unwrap()
      .then(() => {
        navigate('/')
      })
  }

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        <SignInForm onSubmit={signInHandler} />
      </FlexContainer>
    </Page>
  )
}
