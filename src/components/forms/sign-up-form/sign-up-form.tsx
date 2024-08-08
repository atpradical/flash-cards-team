import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { cn } from '@/components/forms/sign-up-form/sign-up-form.styles'
import { Button, Card, Typography } from '@/components/ui/primitives'
import { PATH } from '@/shared/enums'
import { useFormErrors } from '@/shared/hooks'
import { emailSchema, nameScheme, passwordSchema } from '@/shared/schemes'
import { Nullable } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { FormErrorData } from '@/shared/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const SignUpScheme = z
  .object({
    confirmPassword: passwordSchema,
    email: emailSchema,
    name: nameScheme,
    password: passwordSchema,
  })
  .refine(val => val.password !== val.email, {
    message: 'Password should not coincide with the email',
    path: ['password'],
  })
  .refine(val => val.password === val.confirmPassword, {
    message: "Confirm password doesn't match password",
    path: ['confirmPassword'],
  })

export type SignUpFormValues = z.infer<typeof SignUpScheme>

type SignUpFormProps = {
  errors: Nullable<FormErrorData[]> | string
  onSubmit: (formData: SignUpFormValues) => void
}

export const SignUpForm = ({ errors, onSubmit }: SignUpFormProps) => {
  const { control, handleSubmit, setError } = useForm<SignUpFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(SignUpScheme),
  })

  const formHandler = handleSubmit(data => {
    onSubmit(data)
  })

  useFormErrors({ errors, fields: ['name', 'email', 'password'], setError })

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'}>
        <Typography as={'h1'} variant={'h1'}>
          Sign Up
        </Typography>
        <form className={cn.form} onSubmit={formHandler}>
          <FlexContainer fd={'column'} gap={'24px'}>
            <ControlledTextField
              control={control}
              label={'Name'}
              name={'name'}
              placeholder={'Enter your name'}
            />
            <ControlledTextField
              control={control}
              label={'Email'}
              name={'email'}
              placeholder={'Enter your email'}
            />
            <ControlledTextField
              control={control}
              label={'Password'}
              name={'password'}
              placeholder={'Enter a strong password'}
              variant={'password'}
            />
            <ControlledTextField
              control={control}
              label={'Confirm Password'}
              name={'confirmPassword'}
              placeholder={'Repeat your strong password'}
              variant={'password'}
            />
            <Button fullWidth>Sign Up</Button>
          </FlexContainer>
        </form>
        <Typography className={cn.reminder}>Already have an account?</Typography>
        <Button as={Link} className={cn.button} to={PATH.SIGN_IN} variant={'link'}>
          Sign In
        </Button>
      </FlexContainer>
    </Card>
  )
}
