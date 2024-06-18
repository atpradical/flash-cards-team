import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { emailSchema, passwordSchema } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledCheckbox } from '@/shared/ui/form-components/controlled-checkbox'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './sign-in-form.module.scss'

type SignInFormProps = {
  onSubmit: (data: FormValues) => void
}

const SignInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof SignInSchema>

export const SignInForm = ({ onSubmit }: SignInFormProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onSubmit',
    resolver: zodResolver(SignInSchema),
  })

  const formHandler = handleSubmit(data => {
    onSubmit(data)
  })

  const cn = {
    buttonSign: clsx(s.buttonSign),
    checkbox: clsx(s.checkbox),
    container: clsx(s.container),
    form: clsx(s.form),
    link: clsx(s.link),
    textField: clsx(s.textField),
    typography: clsx(s.typography),
  }

  return (
    <>
      <DevTool control={control} />
      <FlexContainer ai={'center'} jc={'center'}>
        <Card className={cn.container}>
          <Typography as={'h1'} variant={'h1'}>
            Sign In
          </Typography>
          <form className={cn.form} onSubmit={formHandler}>
            <ControlledTextField
              className={cn.textField}
              control={control}
              label={'Email'}
              name={'email'}
              placeholder={'Enter your email'}
              type={'email'}
              variant={'text'}
            />
            <ControlledTextField
              control={control}
              label={'Password'}
              name={'password'}
              placeholder={'Enter your password'}
              type={'password'}
              variant={'password'}
            />
            <FlexContainer jc={'flex-start'}>
              <ControlledCheckbox
                className={cn.checkbox}
                control={control}
                label={'Remenber me'}
                name={'rememberMe'}
              />
            </FlexContainer>
          </form>
          <FlexContainer jc={'flex-end'}>
            <Button className={cn.link} variant={'link'}>
              <Typography variant={'body2'}>Forgot Password?</Typography>
            </Button>
          </FlexContainer>
          <Button fullWidth variant={'primary'}>
            Sign In
          </Button>
          <Typography className={cn.typography} variant={'body2'}>
            Don&apos;t have an account?
          </Typography>
          <Button className={cn.buttonSign} variant={'link'}>
            Sign Up
          </Button>
        </Card>
      </FlexContainer>
    </>
  )
}
