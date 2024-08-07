import { useForm } from 'react-hook-form'

import { cn } from '@/components/forms/create-new-password-form/create-new-password-from.styles'
import { Button, Card, Typography } from '@/components/ui/primitives'
import { passwordSchema } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type CreateNewPasswordFormProps = {
  onSubmit: (data: FormValues) => void
}

const CreateNewPasswordSchema = z.object({
  password: passwordSchema,
})

export type FormValues = z.infer<typeof CreateNewPasswordSchema>

export const CreateNewPasswordForm = ({ onSubmit }: CreateNewPasswordFormProps) => {
  const {
    control,
    formState: { isDirty },
    handleSubmit,
  } = useForm<FormValues>({
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
          <Typography className={cn.reminder}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button disabled={!isDirty} fullWidth>
            Create New Password
          </Button>
        </form>
      </FlexContainer>
    </Card>
  )
}
