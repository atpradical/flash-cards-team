import { LogOutOutline } from '@/assets/components/svgIcons'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './personal-Info.module.scss'

type PersonalInfoProps = {
  name: string
  photoDesc?: string
  src: string
}

export const PersonalInfo = ({ name, photoDesc, src }: PersonalInfoProps) => {
  const cn = {
    avatar: clsx(s.avatar),
    container: clsx(s.container),
    hint: clsx(s.hint),
  }

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'} gap={'6px'}>
        <Typography as={'h1'} variant={'h1'}>
          Personal Information
        </Typography>
        <Avatar className={cn.avatar} size={'l'} src={src} title={photoDesc}></Avatar>
        <Typography as={'h2'} variant={'h2'}>
          {name}
        </Typography>
        <Typography className={cn.hint} variant={'body2'}>
          j&johnson@gmail.com
        </Typography>
        <Button variant={'secondary'}>
          <LogOutOutline />
          Logout
        </Button>
      </FlexContainer>
    </Card>
  )
}
