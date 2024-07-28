import { ChangeEvent } from 'react'

import { EditOutline, LogOut, TrashOutline } from '@/assets/icons'
import { Avatar, Button, Card, Typography } from '@/components/ui/primitives'
import { SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth } from '@/shared/hooks'
import { Nullable } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './personal-info.styles'

type PersonalInfoProps = {
  avatar: Nullable<string>
  delAvatar: () => void
  email: string
  name: string
  onEdit: () => void
  onLogout: () => void
  updAvatar: (e: ChangeEvent<HTMLInputElement>) => void
}

export const PersonalInfo = ({
  avatar,
  delAvatar,
  email,
  name,
  onEdit,
  onLogout,
  updAvatar,
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
            <EditOutline className={cn.icon} />
          </Button>
          <Button
            className={cn.delete}
            onClick={delAvatar}
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
          <Button onClick={onEdit} title={'Change name'} variant={'icon'}>
            <EditOutline className={cn.icon} />
          </Button>
        </FlexContainer>
        <Typography className={cn.hint} gray>
          {email}
        </Typography>
        <Button className={cn.bottom} onClick={onLogout} variant={'secondary'}>
          <LogOut className={cn.icon} />
          <Typography variant={'subtitle2'}>Logout</Typography>
        </Button>
      </FlexContainer>
    </Card>
  )
}
