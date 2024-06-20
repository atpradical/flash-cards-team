import { DropdownProfile } from '@/components/layout/userDropdown/dropdownProfile'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './user-profile.module.scss'

export type User = {
  email: string
  name: string
  photo: {
    alt: string
    src: string
  }
}

type Props = {
  isAuthorized: boolean
  userData: User
}

export const UserProfile = ({ isAuthorized, userData }: Props) => {
  const cn = {
    container: clsx(s.container),
    link: clsx(s.link),
  }

  return (
    <FlexContainer className={cn.container}>
      {isAuthorized ? (
        <DropdownProfile
          email={userData.email}
          name={userData.name}
          photo={userData.photo.src}
          photoDesc={userData.photo.alt}
          profilePageHref={'https://google.com'}
          trigger={
            <FlexContainer gap={'14px'}>
              <Typography className={cn.link} variant={'subtitle1'}>
                {userData.name}
              </Typography>
              <Avatar size={'s'} src={userData.photo.src} title={userData.photo.alt} />
            </FlexContainer>
          }
        />
      ) : (
        <Button variant={'secondary'}>Sign In</Button>
      )}
    </FlexContainer>
  )
}
