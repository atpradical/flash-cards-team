import { useForm } from 'react-hook-form'

import { cn } from '@/components/forms/create-new-password-form/create-new-password-from.styles'
import { Button, Card, Typography } from '@/components/ui/primitives'
import { useFormErrors } from '@/shared/hooks'
import { passwordSchema } from '@/shared/schemes'
import { Nullable } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { FormErrorData } from '@/shared/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type CreateNewPasswordFormProps = {
  errors: Nullable<FormErrorData[]> | string
  onSubmit: (formData: CreateNewPasswordFormValues) => void
}

const CreateNewPasswordSchema = z.object({
  password: passwordSchema,
})

export type CreateNewPasswordFormValues = z.infer<typeof CreateNewPasswordSchema>

export const CreateNewPasswordForm = ({ errors, onSubmit }: CreateNewPasswordFormProps) => {
  const { control, handleSubmit, setError } = useForm<CreateNewPasswordFormValues>({
    defaultValues: {
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(CreateNewPasswordSchema),
  })

  const formHandler = handleSubmit(data => onSubmit(data))

  useFormErrors({ errors, fields: ['password'], setError })

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
          <Button fullWidth>Create New Password</Button>
        </form>
      </FlexContainer>
    </Card>
  )
}
