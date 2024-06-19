import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { emailSchema } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './forgotPasswordForm.module.scss'
const ForgotPasswordScheme = z.object({
  email: emailSchema,
})

type ForgotPasswordFormValues = z.infer<typeof ForgotPasswordScheme>

type ForgotPasswordFormProps = {
  onSubmit: (data: ForgotPasswordFormValues) => void
}

export const ForgotPasswordForm = ({ onSubmit }: ForgotPasswordFormProps) => {
  const { control, handleSubmit } = useForm<ForgotPasswordFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(ForgotPasswordScheme),
  })
  const formHandler = handleSubmit(data => {
    onSubmit(data)
  })
  const cn = {
    button: clsx(s.button),
    container: clsx(s.container),
    form: clsx(s.form),
    hint: clsx(s.hint),
    link: clsx(s.link),
    reminder: clsx(s.reminder),
  }

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'}>
        <Typography as={'h1'} variant={'h1'}>
          Forgot your password?
        </Typography>
        <form className={cn.form} onSubmit={formHandler}>
          <FlexContainer fd={'column'} gap={'20px'}>
            <ControlledTextField
              control={control}
              label={'Email'}
              name={'email'}
              placeholder={'Enter your email'}
            />
            <Typography className={cn.hint} variant={'body2'}>
              Enter your email address and we will send you further instructions
            </Typography>
            <Button className={cn.button} fullWidth>
              Send Instructions
            </Button>
          </FlexContainer>
        </form>
        <Typography className={cn.reminder} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Button className={cn.link} variant={'link'}>
          Try logging in
        </Button>
      </FlexContainer>
    </Card>
  )
}
