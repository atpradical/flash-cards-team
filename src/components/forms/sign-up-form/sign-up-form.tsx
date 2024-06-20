import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { emailSchema, passwordSchema } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './sign-up-form.module.scss'

const SignUpScheme = z
  .object({
    confirmPassword: passwordSchema,
    email: emailSchema,
    password: passwordSchema,
  })
  .refine(val => val.password !== val.email, {
    message: 'Bro... try to come up with something better than just repeating your email',
    path: ['password'],
  })
  .refine(val => val.password === val.confirmPassword, {
    message: "Hey buddy, did you forget your password already? They don't match",
    path: ['confirmPassword'],
  })

type SignUpFormValues = z.infer<typeof SignUpScheme>

type SignUpFormProps = {
  onSubmit: (data: SignUpFormValues) => void
}

export const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(SignUpScheme),
  })

  const formHandler = handleSubmit(data => {
    onSubmit(data)
  })

  const cn = {
    button: clsx(s.button),
    container: clsx(s.container),
    form: clsx(s.form),
    reminder: clsx(s.reminder),
  }

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
        <Button as={'a'} className={cn.button} variant={'link'}>
          Sign In
        </Button>
      </FlexContainer>
    </Card>
  )
}
