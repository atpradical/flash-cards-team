import { EditOutline, LogOut, TrashOutline } from '@/assets/icons'
import { Avatar, Button, Card, Progress, Typography } from '@/components/ui/primitives'
import { User, useLogoutMutation, useUpdateUserMutation } from '@/services'
import { SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { cn } from './personal-info.styles'
import { ChangeEvent, useState } from 'react'
import { Nullable } from '@/shared/types/common'

type PersonalInfoProps = {
  userData?: User
}

export const PersonalInfo = ({ userData }: PersonalInfoProps) => {
  const [avatar, setAvatar] = useState<Nullable<string | File>>(userData?.avatar ?? null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [name, setName] = useState(userData?.name || '')
  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.MOBILE_TINY
  const isTinyScreen = currentScreenWidth <= breakpoint

  const [logout] = useLogoutMutation()
  const [updateUser, { isLoading, data }] = useUpdateUserMutation()

  const logoutHandler = () => {
    logout()
  }

  const uploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      setAvatar(file)
      await updateUser({ name, avatar: file })
    }
  }

  const deleteAvatarHandler = async () => {
    setAvatar(null)
    await updateUser({ name, avatar: null })
  }

  console.log('data update profile', data)
  return (
    <Card className={cn.container}>
      {isLoading && <Progress />}
      <FlexContainer fd={'column'} gap={'6px'}>
        <Typography as={'h1'} className={cn.title} variant={'h1'}>
          Personal Information
        </Typography>
        <FlexContainer className={cn.wrapper}>
          <Avatar
            className={cn.avatar}
            name={userData?.name}
            size={isTinyScreen ? 'm' : 'l'}
            src={userData?.avatar || undefined}
          />
          <Button
            as={'label'}
            className={cn.editAvatar}
            title={'Edit Avatar'}
            variant={'secondary'}
          >
            <input accept={'image/*'} hidden onChange={uploadHandler} type={'file'} />
            <EditOutline className={cn.icon} />
          </Button>
          {isEditMode && (
            <Button
              className={cn.editAvatar}
              onClick={deleteAvatarHandler}
              title={'Delete Avatar'}
              variant={'secondary'}
            >
              <TrashOutline className={cn.icon} />
            </Button>
          )}
        </FlexContainer>
        <FlexContainer gap={'12px'} jc={'center'}>
          <Typography as={'h2'} variant={'h2'}>
            {userData?.name}
          </Typography>
          <Button title={'Edit profile'} variant={'icon'}>
            <EditOutline className={cn.icon} />
          </Button>
        </FlexContainer>
        <Typography className={cn.hint} gray>
          {userData?.email}
        </Typography>
        <Button className={cn.bottom} onClick={logoutHandler} variant={'secondary'}>
          <LogOut className={cn.icon} />
          <Typography variant={'subtitle2'}>Logout</Typography>
        </Button>
      </FlexContainer>
    </Card>
  )
}
