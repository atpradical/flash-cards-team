import { useNavigate } from 'react-router-dom'

import { SignUpForm, SignUpFormValues } from '@/components/forms'
import { useCreateUserMutation } from '@/services'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const SignUpPage = () => {
  const [createUser, { isLoading }] = useCreateUserMutation()

  const navigate = useNavigate()

  const signUpFormHandler = async (formData: SignUpFormValues) => {
    await createUser(formData)
      .unwrap()
      .then(() => navigate(PATH.SIGN_IN))
  }

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        <SignUpForm onSubmit={signUpFormHandler} />
      </FlexContainer>
    </Page>
  )
}
