import { useForm } from 'react-hook-form'

import { DialogFormFooter as Footer } from '@/components/forms/dialog-forms/container-components'
import { Avatar, Card, Typography } from '@/components/ui/primitives'
import { User } from '@/services'
import { useDisableOnLoading } from '@/shared/hooks'
import { nicknameScheme } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { cn } from './personal-info-form.styles'

const PersonalInfoFormScheme = z
  .object({
    nickname: nicknameScheme,
  })
  .refine(val => val.nickname.length, {
    message: "Dude... nickname can't be just spaces",
    path: ['nickname'],
  })

type PersonalInfoFromValues = z.infer<typeof PersonalInfoFormScheme>

type PersonalInfoFormProps = {
  isLoading: boolean
  onCancel: () => void
  onSubmit: (data: PersonalInfoFromValues) => void
  userData: User
}

export const PersonalInfoForm = ({
  isLoading,
  onCancel,
  onSubmit,
  userData,
}: PersonalInfoFormProps) => {
  const {
    control,
    formState: { isDirty },
    handleSubmit,
  } = useForm<PersonalInfoFromValues>({
    defaultValues: {
      nickname: userData.name,
    },
    mode: 'onSubmit',
    resolver: zodResolver(PersonalInfoFormScheme),
  })

  const formHandler = handleSubmit(data => onSubmit(data))

  const disabled = useDisableOnLoading(isLoading) || !isDirty

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'} gap={'12px'}>
        <Typography as={'h1'} className={cn.typography} variant={'h1'}>
          Personal Information
        </Typography>
        <Avatar className={cn.avatar} size={'l'} src={userData.avatar ?? undefined} />
        <form className={cn.form} onSubmit={formHandler}>
          <ControlledTextField
            control={control}
            label={'Nickname'}
            name={'nickname'}
            placeholder={'what name should we call you by?'}
          />
          <Footer
            className={cn.footer}
            disabled={disabled}
            onCancel={onCancel}
            onSubmit={formHandler}
            title={'Save'}
          />
        </form>
      </FlexContainer>
    </Card>
  )
}
