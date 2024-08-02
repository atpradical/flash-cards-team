import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

import { cn } from '@/components/forms/personal-Info-form/personal-info-form.styles'
import { Avatar, Button, Card, Typography } from '@/components/ui/primitives'
import { nicknameScheme } from '@/shared/schemes'
import { Nullable } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const PersonalInfoFormScheme = z
  .object({
    nickname: nicknameScheme,
  })
  .refine(val => val.nickname.length, {
    message: 'Ensure that the nickname field does not consist solely of spaces.',
    path: ['nickname'],
  })

export type PersonalInfoFromValues = z.infer<typeof PersonalInfoFormScheme>

type PersonalInfoFormProps = {
  avatar: Nullable<string>
  name: string
  onCancel: (e: ChangeEvent<HTMLButtonElement>) => void
  onSubmit: (formData: PersonalInfoFromValues) => void
}

export const PersonalInfoForm = ({ avatar, name, onCancel, onSubmit }: PersonalInfoFormProps) => {
  const { control, handleSubmit } = useForm<PersonalInfoFromValues>({
    defaultValues: {
      nickname: name,
    },
    mode: 'onSubmit',
    resolver: zodResolver(PersonalInfoFormScheme),
  })

  const formHandler = handleSubmit(formData => onSubmit(formData))

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'} gap={'12px'}>
        <Typography as={'h1'} variant={'h1'}>
          Personal Information
        </Typography>
        <Avatar className={cn.avatar} name={name} size={'l'} src={avatar} />
        <form className={cn.form} onSubmit={formHandler}>
          <FlexContainer fd={'column'} gap={'36px'}>
            <ControlledTextField
              control={control}
              label={'Nickname'}
              name={'nickname'}
              placeholder={'what name should we call you by?'}
            />
            <FlexContainer fw={'wrap'} gap={'10px'}>
              <Button fullWidth onSubmit={formHandler}>
                Change Name
              </Button>
              <Button fullWidth onClick={onCancel} variant={'secondary'}>
                Cancel
              </Button>
            </FlexContainer>
          </FlexContainer>
        </form>
      </FlexContainer>
    </Card>
  )
}
