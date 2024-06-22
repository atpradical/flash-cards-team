import { Edit2Outline, LogOutOutline } from '@/assets/components/svgIcons'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
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
    avatarWrapper: clsx(s.avatarWrapper),
    buttonEdit2Outline: clsx(s.buttonEdit2Outline),
    buttonLogOutOutline: clsx(s.buttonLogOutOutline),
    buttonSecondary: clsx(s.buttonSecondary),
    container: clsx(s.container),
    hint: clsx(s.hint),
    svg: clsx(s.svg),
  }

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'} gap={'6px'}>
        <Typography as={'h1'} variant={'h1'}>
          Personal Information
        </Typography>

        <div className={cn.avatarWrapper}>
          <Avatar className={cn.avatar} size={'l'} src={src} title={photoDesc} />
          <Button className={cn.buttonSecondary} variant={'secondary'}>
            <Edit2Outline className={cn.svg} />
          </Button>
        </div>

        <FlexContainer jc={'center'}>
          <Typography as={'h2'} variant={'h2'}>
            {name}
          </Typography>
          <Button className={cn.buttonEdit2Outline} variant={'icon'}>
            <Edit2Outline className={cn.svg} />
          </Button>
        </FlexContainer>

        <Typography className={cn.hint} variant={'body2'}>
          j&johnson@gmail.com
        </Typography>

        <Button className={cn.buttonLogOutOutline} variant={'secondary'}>
          <LogOutOutline className={cn.svg} />
          <Typography variant={'subtitle2'}>Logout</Typography>
        </Button>
      </FlexContainer>
    </Card>
  )
}
