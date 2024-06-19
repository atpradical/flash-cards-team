import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { passwordSchema } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'

import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './create-new-password-form.module.scss'

import { Typography } from '../../typography'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'

type CreateNewPasswordFormProps = {
  onSubmit: (data: FormValues) => void
}

const CreateNewPasswordSchema = z.object({
  password: passwordSchema,
})

type FormValues = z.infer<typeof CreateNewPasswordSchema>

export const CreateNewPasswordForm = ({ onSubmit }: CreateNewPasswordFormProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(CreateNewPasswordSchema),
  })

  const formHandler = handleSubmit(data => {
    onSubmit(data)
  })

  const cn = {
    button: clsx(s.button),
    container: clsx(s.container),
    form: clsx(s.form),
    typography: clsx(s.typography),
  }

  return (
    <Card className={cn.container}>
      <Typography as={'h1'} variant={'h1'}>
        Create new password
      </Typography>
      <FlexContainer fd={'column'} gap={'26px'}>
        <form className={cn.form} onSubmit={formHandler}>
          <ControlledTextField
            control={control}
            label={'Password'}
            name={'password'}
            variant={'password'}
          />
        </form>
        <Typography as={'p'} className={cn.typography} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button className={cn.button} fullWidth>
          Create New Password
        </Button>
      </FlexContainer>
    </Card>
  )
}
