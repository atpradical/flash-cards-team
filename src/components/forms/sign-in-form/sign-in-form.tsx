import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { cn } from '@/components/forms/sign-in-form/sign-in-form.styles'
import { Button, Card, Typography } from '@/components/ui/primitives'
import { PATH, SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth } from '@/shared/hooks'
import { emailSchema, passwordSchema, rememberMeSchema } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledCheckbox } from '@/shared/ui/form-components/controlled-checkbox'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type SignInFormProps = {
  isError: boolean
  onSubmit: (data: LoginFormValues) => void
}

const SignInFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: rememberMeSchema,
})

export type LoginFormValues = z.infer<typeof SignInFormSchema>

export const SignInForm = ({ isError, onSubmit }: SignInFormProps) => {
  const { control, handleSubmit, setError } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onSubmit',
    resolver: zodResolver(SignInFormSchema),
  })

  // todo: need review check
  useEffect(() => {
    if (isError) {
      setError('email', {})
      setError('password', {})
    }
  }, [isError, setError])

  const formHandler = handleSubmit(data => {
    onSubmit(data)
  })

  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.MOBILE_TINY
  const isTinyScreen = currentScreenWidth <= breakpoint
  const gap = isTinyScreen ? '12px' : '24px'

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'}>
        <Typography as={'h1'} variant={'h1'}>
          Sign In
        </Typography>
        <form className={cn.form} onSubmit={formHandler}>
          <FlexContainer ai={'left'} fd={'column'} gap={gap}>
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
            <Typography as={Link} className={cn.link} to={PATH.PWD_RECOVERY}>
              Forgot Password?
            </Typography>
          </FlexContainer>
          <Button fullWidth variant={'primary'}>
            Sign In
          </Button>
        </form>
        <Typography className={cn.typography}>Don&apos;t have an account?</Typography>
        <Button as={Link} className={cn.buttonSign} to={PATH.SIGN_UP} variant={'link'}>
          Sign Up
        </Button>
      </FlexContainer>
    </Card>
  )
}
