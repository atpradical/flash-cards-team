import { useState } from 'react'

import { SignUpForm, SignUpFormValues } from '@/components/forms'
import { CheckEmail } from '@/components/ui/layout-components'
import { useCreateUserMutation } from '@/services'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [createUser, { isLoading, isSuccess }] = useCreateUserMutation()

  const signUpFormHandler = (formData: SignUpFormValues) => {
    setEmail(formData.email)
    createUser(formData)
  }

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        {isSuccess ? <CheckEmail email={email} /> : <SignUpForm onSubmit={signUpFormHandler} />}
      </FlexContainer>
    </Page>
  )
}
