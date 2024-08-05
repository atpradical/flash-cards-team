import { useState } from 'react'
import { toast } from 'react-toastify'

import { SignUpForm, SignUpFormValues } from '@/components/forms'
import { CheckEmail } from '@/components/ui/layout-components'
import { useCreateUserMutation } from '@/services'
import { Nullable } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'
import { FormErrorData, getErrorMessageData } from '@/shared/utils'

export const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [formErrors, setFromErrors] = useState<Nullable<FormErrorData[] | string>>(null)
  const [createUser, { isLoading, isSuccess }] = useCreateUserMutation()

  const signUpFormHandler = async (formData: SignUpFormValues) => {
    setEmail(formData.email)
    try {
      await createUser(formData).unwrap()
      toast.success(`User successfully created!`)
      toast.warning(`Verification request sent to ${formData.email}`)
    } catch (e) {
      const errors = getErrorMessageData(e)

      setFromErrors(errors)
    }
  }

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        {isSuccess ? (
          <CheckEmail email={email} />
        ) : (
          <SignUpForm errors={formErrors} onSubmit={signUpFormHandler} />
        )}
      </FlexContainer>
    </Page>
  )
}
