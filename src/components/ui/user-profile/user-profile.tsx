import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './user-profile.module.scss'

type Props = {
  isAuthorized: boolean
  src?: string
  userName?: string
}
export const UserProfile = ({ isAuthorized, src, userName }: Props) => {
  const cn = { container: clsx(s.container), link: clsx(s.link, src) }

  return (
    <>
      {isAuthorized ? (
        <div className={cn.container}>
          <Button className={cn.link} variant={'link'}>
            <Typography variant={'subtitle1'}>{userName}</Typography>
          </Button>
          <Avatar size={'s'} src={src} title={'Photo'} />
        </div>
      ) : (
        <div>
          <Button variant={'secondary'}>Sign In</Button>
        </div>
      )}
    </>
  )
}
