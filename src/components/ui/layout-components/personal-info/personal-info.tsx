import { EditOutline, LogOutOutline } from '@/assets/components/svgIcons'
import { Avatar, Button, Card, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './personal-info.module.scss'

type PersonalInfoProps = {
  name: string
  photoDesc?: string
  src: string
}

export const PersonalInfo = ({ name, photoDesc, src }: PersonalInfoProps) => {
  const cn = {
    avatar: clsx(s.avatar),
    bottom: clsx(s.bottom),
    container: clsx(s.container),
    editAvatar: clsx(s.editAvatar),
    hint: clsx(s.hint),
    icon: clsx(s.icon),
    wrapper: clsx(s.wrapper),
  }

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'} gap={'6px'}>
        <Typography as={'h1'} variant={'h1'}>
          Personal Information
        </Typography>
        <FlexContainer className={cn.wrapper}>
          <Avatar className={cn.avatar} size={'l'} src={src} title={photoDesc} />
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
        <Button className={cn.bottom} variant={'secondary'}>
          <LogOutOutline className={cn.icon} />
          <Typography variant={'subtitle2'}>Logout</Typography>
        </Button>
      </FlexContainer>
    </Card>
  )
}
