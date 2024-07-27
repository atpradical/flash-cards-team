import { EditOutline, LogOut } from '@/assets/icons'
import { Avatar, Button, Card, Typography } from '@/components/ui/primitives'
import { useLogoutMutation } from '@/services'
import { SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './personal-info.styles'

type PersonalInfoProps = {
  name: string
  photoDesc?: string
  src: string
}

export const PersonalInfo = ({ name, photoDesc, src }: PersonalInfoProps) => {
  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.MOBILE_TINY
  const isTinyScreen = currentScreenWidth <= breakpoint

  const [logout] = useLogoutMutation()

  const logoutHandler = () => {
    logout()
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
            size={isTinyScreen ? 'm' : 'l'}
            src={src}
            title={photoDesc}
          />
          <Button className={cn.editAvatar} variant={'secondary'}>
            <EditOutline className={cn.icon} />
          </Button>
        </FlexContainer>
        <FlexContainer gap={'12px'} jc={'center'}>
          <Typography as={'h2'} variant={'h2'}>
            {name}
          </Typography>
          <Button variant={'icon'}>
            <EditOutline className={cn.icon} />
          </Button>
        </FlexContainer>
        <Typography className={cn.hint} gray>
          j&johnson@gmail.com
        </Typography>
        <Button className={cn.bottom} onClick={logoutHandler} variant={'secondary'}>
          <LogOut className={cn.icon} />
          <Typography variant={'subtitle2'}>Logout</Typography>
        </Button>
      </FlexContainer>
    </Card>
  )
}
