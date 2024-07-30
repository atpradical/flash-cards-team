import { EditOutline, LogOut, TrashOutline } from '@/assets/icons'
import { PersonalInfoForm } from '@/components/forms'
import { Avatar, Button, Card, Typography } from '@/components/ui/primitives'
import { User } from '@/services'
import { SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth } from '@/shared/hooks'
import { usePersonalInfoData } from '@/shared/hooks/use-personal-info-data'
import { FlexContainer } from '@/shared/ui/flex-container'
import { convertToString } from '@/shared/utils/convert-avatar-toString'

import { cn } from './personal-info.styles'

type PersonalInfoProps = {
  userData: User
}

export const PersonalInfo = ({ userData }: PersonalInfoProps) => {
  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.MOBILE_TINY
  const isTinyScreen = currentScreenWidth <= breakpoint

  const {
    cancelPersonalInfoHandler,
    deleteAvatarHandler,
    editNameHandler,
    isEditMode,
    logoutHandler,
    saveNameHandler,
    uploadHandler,
  } = usePersonalInfoData(userData)

  return (
    <>
      {isEditMode ? (
        <PersonalInfoForm
          onCancel={cancelPersonalInfoHandler}
          onSubmit={saveNameHandler}
          personalData={userData}
        />
      ) : (
        <Card className={cn.container}>
          <FlexContainer fd={'column'} gap={'6px'}>
            <Typography as={'h1'} className={cn.title} variant={'h1'}>
              Personal Information
            </Typography>
            <FlexContainer className={cn.wrapper}>
              <Avatar
                className={cn.avatar}
                name={userData.name}
                size={isTinyScreen ? 'm' : 'l'}
                src={convertToString(userData.avatar)}
              />

              <Button
                as={'label'}
                className={cn.editAvatar}
                title={'Edit Avatar'}
                variant={'secondary'}
              >
                <EditOutline className={cn.icon} />
                <input accept={'image/*'} hidden onChange={uploadHandler} type={'file'} />
              </Button>
              <Button
                className={cn.deleteAvatar}
                onClick={deleteAvatarHandler}
                title={'Delete Avatar'}
                variant={'secondary'}
              >
                <TrashOutline className={cn.icon} />
              </Button>
            </FlexContainer>
            <FlexContainer gap={'12px'} jc={'center'}>
              <Typography as={'h2'} variant={'h2'}>
                {userData.name}
              </Typography>
              <Button onClick={editNameHandler} title={'Edit profile'} variant={'icon'}>
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
      )}
    </>
  )
}
