import { DropdownProfile } from '@/components/layout/userDropdown/dropdownProfile'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import { User } from '@/types'
import clsx from 'clsx'

import s from './user-profile.module.scss'

type Props = {
  isAuthorized: boolean
  userData: User
}

export const UserProfile = ({ isAuthorized, userData: { email, name, photo } }: Props) => {
  const cn = clsx(s.link)

  if (!isAuthorized) {
    return <Button variant={'secondary'}>Sign In</Button>
  }

  const trigger = (
    <FlexContainer gap={'14px'}>
      <Typography className={cn} variant={'subtitle1'}>
        {name}
      </Typography>
      <Avatar size={'s'} src={photo.src} title={photo.alt} />
    </FlexContainer>
  )

  return (
    <DropdownProfile
      email={email}
      name={name}
      photo={photo.src}
      photoDesc={photo.alt}
      profilePageHref={'https://google.com'}
      trigger={trigger}
    />
  )
}
