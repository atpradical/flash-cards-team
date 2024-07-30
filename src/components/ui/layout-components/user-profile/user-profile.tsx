import { Link } from 'react-router-dom'

import { ProfileDropdown } from '@/components/ui/layout-components'
import { Avatar, Button, Typography } from '@/components/ui/primitives'
import { User } from '@/services'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './user-profile.styles'

type Props = {
  isAuth: boolean
  userData?: User
}

export const UserProfile = ({ isAuth, userData }: Props) => {
  if (!isAuth || !userData) {
    return (
      <Button as={Link} to={PATH.SIGN_IN} variant={'secondary'}>
        Sign In
      </Button>
    )
  }

  const trigger = (
    <FlexContainer gap={'14px'}>
      <Typography className={cn} variant={'subtitle1'}>
        {userData.name}
      </Typography>
      <Avatar name={userData.name} size={'s'} src={userData.avatar ?? undefined} />
    </FlexContainer>
  )

  return (
    <ProfileDropdown
      avatar={userData.avatar}
      email={userData.email}
      name={userData.name}
      trigger={trigger}
    />
  )
}
