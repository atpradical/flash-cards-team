import { Card } from '@/components/ui/card'

import { Typography } from '../../typography'
import { ControlledTextField } from '@/shared/ui/form-components'
import { useForm } from 'react-hook-form'
import { passwordSchema } from '@/shared/schemes'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Button } from '@/components/ui/button'
import s from './create-new-password-form.module.scss'

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

  return (
    <Card className={s.container}>
      <Typography as={'h1'} variant={'h1'}>
        Create new password
      </Typography>
      <FlexContainer fd={'column'} gap={'26px'}>
        <form onSubmit={formHandler} className={s.form}>
          <ControlledTextField
            control={control}
            label={'Password'}
            name={'password'}
            variant={'password'}
          />
        </form>
        <Typography as={'p'} variant={'body2'} className={s.typography}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button fullWidth className={s.button}>
          Create New Password
        </Button>
      </FlexContainer>
    </Card>
  )
}
