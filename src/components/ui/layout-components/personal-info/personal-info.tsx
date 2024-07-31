import { ChangeEvent } from 'react'

import { EditOutline, LogOut, TrashOutline } from '@/assets/icons'
import { Avatar, Button, Card, Typography } from '@/components/ui/primitives'
import { User, useResendVerifyEmailMutation } from '@/services'
import { createUserHTML } from '@/services/auth/auth-templates'
import { SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'

import { CheckEmail } from '../check-email'
import { VerifyHint } from '../verify-hint'
import { cn } from './personal-info.styles'

type PersonalInfoProps = {
  deleteAvatar: () => void
  editName: () => void
  logout: () => void
  uploadAvatar: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
  userData: User
}

export const PersonalInfo = ({
  deleteAvatar,
  editName,
  logout,
  uploadAvatar,
  userData,
}: PersonalInfoProps) => {
  const { avatar, email, id, isEmailVerified, name } = userData
  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.MOBILE_TINY
  const isTinyScreen = currentScreenWidth <= breakpoint

  const [resendVerifyEmail, { data, isSuccess }] = useResendVerifyEmailMutation()

  console.log('verifyEmail data', data)

  const resendVerifyEmailHandler = () => {
    resendVerifyEmail({ html: createUserHTML, subject: 'vefiry', userId: id })
  }

  if (isSuccess) {
    return <CheckEmail email={email} name={name} />
  }

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'} gap={'6px'}>
        <Typography as={'h1'} className={cn.title} variant={'h1'}>
          Personal Information
        </Typography>
        <FlexContainer className={cn.wrapper}>
          <Avatar
            className={cn.avatar}
            name={name}
            size={isTinyScreen ? 'm' : 'l'}
            src={avatar ?? undefined}
          />
          <Button
            as={'label'}
            className={cn.editAvatar}
            title={'Edit Avatar'}
            variant={'secondary'}
          >
            <EditOutline className={cn.icon} />
            <input accept={'image/*'} hidden onChange={uploadAvatar} type={'file'} />
          </Button>
          <Button
            className={cn.deleteAvatar}
            onClick={deleteAvatar}
            title={'Delete Avatar'}
            variant={'secondary'}
          >
            <TrashOutline className={cn.icon} />
          </Button>
        </FlexContainer>
        <FlexContainer gap={'12px'} jc={'center'}>
          <Typography as={'h2'} variant={'h2'}>
            {name}
          </Typography>
          <Button onClick={editName} title={'Edit profile'} variant={'icon'}>
            <EditOutline className={cn.icon} />
          </Button>
        </FlexContainer>
        <Typography className={cn.hint} gray>
          {email}
        </Typography>

        {!isEmailVerified && <VerifyHint verify={resendVerifyEmailHandler} />}
        <Button className={cn.bottom} onClick={logout} variant={'secondary'}>
          <LogOut className={cn.icon} />
          <Typography variant={'subtitle2'}>Logout</Typography>
        </Button>
      </FlexContainer>
    </Card>
  )
}
