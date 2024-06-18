import { Card } from '@/components/ui/card'

import s from './create-new-password-form.module.scss'

import { Typography } from '../../typography'
// import { ControlledTextField } from '@/shared/ui/form-components'
// import { useForm } from 'react-hook-form'

type CreateNewPasswordFormProps = {
  onSubmit: (data: any) => void
}

// const CreateNewPasswordSchema = z.object({
//   password: passwordSchema,
// })
// type FormValues = z.infer<typeof SignInSchema>

export const CreateNewPasswordForm = ({ onSubmit }: CreateNewPasswordFormProps) => {
  // const { control, handleSubmit } = useForm<FormValues>({
  //   defaultValues: {
  //     password: '',
  //   },
  //   mode: 'onSubmit',
  //   resolver: zodResolver(CreateNewPasswordSchema),
  // })

  // const formHandler = handleSubmit(data => {
  //   onSubmit(data)
  // })

  return (
    <Card className={s.container}>
      <Typography as={'h1'} variant={'h1'}>
        Create new password
      </Typography>
      <form onSubmit={onSubmit}>{/* <ControlledTextField control={control} /> */}</form>
    </Card>
  )
}
