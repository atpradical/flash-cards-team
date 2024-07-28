import { ChangeEvent } from 'react'

import { EditOutline, LogOut, Trash, TrashOutline } from '@/assets/icons'
import { Avatar, Button, Card, Typography } from '@/components/ui/primitives'
import { SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth } from '@/shared/hooks'
import { Nullable } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './personal-info.styles'

type PersonalInfoProps = {
  avatar: Nullable<string>
  delAccount: () => void
  delAvatar: () => void
  email: string
  isEmailVerified: boolean
  isResendSuccess: boolean
  name: string
  onEdit: () => void
  onEmailVerify: (userId: string) => void
  onLogout: () => void
  updAvatar: (e: ChangeEvent<HTMLInputElement>) => void
  userId: string
}

export const PersonalInfo = ({
  avatar,
  delAccount,
  delAvatar,
  email,
  isEmailVerified,
  isResendSuccess,
  name,
  onEdit,
  onEmailVerify,
  onLogout,
  updAvatar,
  userId,
}: PersonalInfoProps) => {
  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.MOBILE_TINY
  const isTinyScreen = currentScreenWidth <= breakpoint

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'} gap={'6px'}>
        <Typography as={'h1'} className={cn.title} variant={'h1'}>
          Personal Information
        </Typography>
        <FlexContainer className={cn.wrapper}>
          <Avatar className={cn.avatar} name={name} size={isTinyScreen ? 'm' : 'l'} src={avatar} />
          <Button as={'label'} className={cn.edit} title={'Edit Avatar'} variant={'secondary'}>
            <input accept={'image/*'} hidden onChange={updAvatar} type={'file'} />
            <EditOutline className={cn.accent} />
          </Button>
          <Button
            className={cn.delete}
            onClick={delAvatar}
            title={'Delete Avatar'}
            variant={'secondary'}
          >
            <TrashOutline className={cn.accent} />
          </Button>
        </FlexContainer>
        <FlexContainer gap={'12px'} jc={'center'}>
          <Typography as={'h2'} variant={'h2'}>
            {name}
          </Typography>
          <Button onClick={onEdit} title={'Change name'} variant={'icon'}>
            <EditOutline className={cn.accent} />
          </Button>
        </FlexContainer>
        {!isEmailVerified && (
          <div className={cn.verifyEmail}>
            <Typography variant={'error'}>Email is not verified!</Typography>
            {isResendSuccess ? (
              <Typography>
                Confirmation request sent. <br /> Please check your mail
              </Typography>
            ) : (
              <Button onClick={() => onEmailVerify(userId)} variant={'link'}>
                Resend request
              </Button>
            )}
          </div>
        )}
        <Typography className={cn.hint} gray>
          {email}
        </Typography>
        <FlexContainer fw={'wrap'} jc={'space-around'}>
          <Button className={cn.bottom} onClick={delAccount} variant={'danger'}>
            <Trash className={cn.icon} />
            Delete Account
          </Button>
          <Button className={cn.bottom} onClick={onLogout} variant={'secondary'}>
            <LogOut className={cn.icon} />
            Logout
          </Button>
        </FlexContainer>
      </FlexContainer>
    </Card>
  )
}
