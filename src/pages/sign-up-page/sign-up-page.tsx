import { useNavigate } from 'react-router-dom'

import { SignUpForm } from '@/components/forms'
import { useSignUpMutation } from '@/services'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const SignUpPage = () => {
  const [signUp, { data: signUpData, isLoading }] = useSignUpMutation()

  const navigate = useNavigate()

  const signUpHandler = async (value: any) => {
    try {
      await signUp(value).unwrap()
      navigate(PATH.CHECK_EMAIL)
    } catch (e: any) {
      console.error(e.data.errorMessages[0])
    }
  }

  console.log('signUpData', signUpData)

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        <SignUpForm onSubmit={signUpHandler} />
      </FlexContainer>
    </Page>
  )
}
