import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './user-profile.module.scss'

type Props = {
  isAuthorized: boolean
  src?: string
  userName?: string
}
export const UserProfile = ({ isAuthorized, src, userName }: Props) => {
  const cn = {
    container: clsx(s.container),
    link: clsx(s.link),
  }

  return (
    <FlexContainer className={cn.container}>
      {isAuthorized ? (
        <>
          <Button className={cn.link} variant={'link'}>
            <Typography variant={'subtitle1'}>{userName}</Typography>
          </Button>
          <Avatar size={'s'} src={src} title={'Photo'} />
        </>
      ) : (
        <Button variant={'secondary'}>Sign In</Button>
      )}
    </FlexContainer>
  )
}
