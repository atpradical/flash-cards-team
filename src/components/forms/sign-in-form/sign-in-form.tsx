import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button, Card, Typography } from '@/components/ui/primitives'
import { emailSchema, passwordSchema, rememberMeSchema } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledCheckbox } from '@/shared/ui/form-components/controlled-checkbox'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './sign-in-form.module.scss'

type SignInFormProps = {
  onSubmit: (data: FormValues) => void
}

const SignInFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: rememberMeSchema,
})

type FormValues = z.infer<typeof SignInFormSchema>

export const SignInForm = ({ onSubmit }: SignInFormProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onSubmit',
    resolver: zodResolver(SignInFormSchema),
  })

  const formHandler = handleSubmit(data => {
    onSubmit(data)
  })

  const cn = {
    buttonSign: clsx(s.buttonSign),
    container: clsx(s.container),
    form: clsx(s.form),
    link: clsx(s.link),
    typography: clsx(s.typography),
  }

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'}>
        <Typography as={'h1'} variant={'h1'}>
          Sign In
        </Typography>
        <form className={cn.form} onSubmit={formHandler}>
          <FlexContainer ai={'left'} fd={'column'} gap={'24px'}>
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
              placeholder={'Enter your password'}
              variant={'password'}
            />
            <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
            <Typography as={Link} className={cn.link} to={'/password-recovery'}>
              Forgot Password?
            </Typography>
          </FlexContainer>
          <Button fullWidth variant={'primary'}>
            Sign In
          </Button>
        </form>
        <Typography className={cn.typography}>Don&apos;t have an account?</Typography>
        <Button as={Link} className={cn.buttonSign} to={'/sign-up'} variant={'link'}>
          Sign Up
        </Button>
      </FlexContainer>
    </Card>
  )
}
