import { EditOutline, LogOut } from '@/assets/icons'
import { Avatar, Button, Card, Typography } from '@/components/ui/primitives'
import { User, useLogOutMutation } from '@/services'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './personal-info.styles'

type PersonalInfoProps = {
  user: User
}

export const PersonalInfo = ({ user }: PersonalInfoProps) => {
  const [logout] = useLogOutMutation()

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'} gap={'6px'}>
        <Typography as={'h1'} variant={'h1'}>
          Personal Information
        </Typography>
        <FlexContainer className={cn.wrapper}>
          <Avatar className={cn.avatar} size={'l'} src={user.avatar} title={user.name} />
          <Button className={cn.editAvatar} variant={'secondary'}>
            <EditOutline className={cn.icon} />
          </Button>
        </FlexContainer>
        <FlexContainer gap={'12px'} jc={'center'}>
          <Typography as={'h2'} variant={'h2'}>
            {user.name}
          </Typography>
          <Button variant={'icon'}>
            <EditOutline className={cn.icon} />
          </Button>
        </FlexContainer>
        <Typography className={cn.hint} gray>
          {user.email}
        </Typography>
        <Button className={cn.bottom} onClick={() => logout()} variant={'secondary'}>
          <LogOut className={cn.icon} />
          <Typography variant={'subtitle2'}>Logout</Typography>
        </Button>
      </FlexContainer>
    </Card>
  )
}
