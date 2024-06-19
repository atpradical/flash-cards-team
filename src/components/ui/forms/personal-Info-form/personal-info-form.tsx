import { useForm } from 'react-hook-form'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { nicknameScheme } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './personal-info-form.module.scss'

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
  onSubmit: (data: PersonalInfoFromValues) => void
  src: string
}

export const PersonalInfoForm = ({ onSubmit, src }: PersonalInfoFormProps) => {
  const { control, handleSubmit } = useForm<PersonalInfoFromValues>({
    mode: 'onSubmit',
    resolver: zodResolver(PersonalInfoFormScheme),
  })

  const formHandler = handleSubmit(data => onSubmit(data))

  const cn = {
    avatar: clsx(s.avatar),
    button: clsx(s.button),
    container: clsx(s.container),
    form: clsx(s.form),
  }

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'} gap={'12px'}>
        <Typography as={'h1'} variant={'h1'}>
          Personal Information
        </Typography>
        <Avatar className={cn.avatar} size={'l'} src={src} />
        <form className={cn.form} onSubmit={formHandler}>
          <FlexContainer fd={'column'} gap={'36px'}>
            <ControlledTextField
              control={control}
              label={'Nickname'}
              name={'nickname'}
              placeholder={'what name should we call you by?'}
            />
            <Button className={cn.button} fullWidth>
              Save Changes
            </Button>
          </FlexContainer>
        </form>
      </FlexContainer>
    </Card>
  )
}
