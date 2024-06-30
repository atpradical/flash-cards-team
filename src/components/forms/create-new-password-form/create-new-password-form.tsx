import { useForm } from 'react-hook-form'

import { passwordSchema } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './create-new-password-form.module.scss'

import { Button } from '../../ui/primitives/button'
import { Card } from '../../ui/primitives/card'
import { Typography } from '../../ui/primitives/typography'

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
    container: clsx(s.container),
    form: clsx(s.form),
    reminder: clsx(s.reminder),
  }

  return (
    <Card className={cn.container}>
      <Typography as={'h1'} variant={'h1'}>
        Create new password
      </Typography>
      <FlexContainer fd={'column'}>
        <form className={cn.form} onSubmit={formHandler}>
          <ControlledTextField
            control={control}
            label={'Password'}
            name={'password'}
            placeholder={'Create new password'}
            variant={'password'}
          />
          <Typography className={cn.reminder} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button fullWidth>Create New Password</Button>
        </form>
      </FlexContainer>
    </Card>
  )
}
