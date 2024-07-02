import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button, Card, Typography } from '@/components/ui/primitives'
import { ROUTES } from '@/shared/enums'
import { emailSchema } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './forgot-password-form.module.scss'

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
            <Typography className={cn.hint}>
              Enter your email address and we will send you further instructions
            </Typography>
            <Button className={cn.button} fullWidth>
              Send Instructions
            </Button>
          </FlexContainer>
        </form>
        <Typography className={cn.reminder}>Did you remember your password?</Typography>
        <Button as={Link} className={cn.link} to={ROUTES.SIGN_IN} variant={'link'}>
          Try logging in
        </Button>
      </FlexContainer>
    </Card>
  )
}
