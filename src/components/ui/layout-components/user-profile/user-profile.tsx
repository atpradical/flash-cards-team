import { User } from '@/common/types'
import { ProfileDropdown } from '@/components/ui/layout-components'
import { Avatar, Button, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './user-profile.module.scss'

type Props = {
  isAuthorized: boolean
  userData: User
}

export const UserProfile = ({ isAuthorized, userData: { email, name, photo } }: Props) => {
  const cn = clsx(s.link)

  if (!isAuthorized) {
    return (
      <Button as={Link} to={PATH.SIGN_IN} variant={'secondary'}>
        Sign In
      </Button>
    )
  }

  const trigger = (
    <FlexContainer gap={'14px'}>
      <Typography className={cn} variant={'subtitle1'}>
        {name}
      </Typography>
      <Avatar size={'s'} src={photo.src} title={photo.alt} />
    </FlexContainer>
  )

  return <ProfileDropdown email={email} name={name} photo={photo} trigger={trigger} />
}
