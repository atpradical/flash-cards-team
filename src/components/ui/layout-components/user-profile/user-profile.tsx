import { Link } from 'react-router-dom'

import { ProfileDropdown } from '@/components/ui/layout-components'
import { Avatar, Button, Typography } from '@/components/ui/primitives'
import { User, useLogOutMutation } from '@/services'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './user-profile.styles'

type Props = {
  isAuth: boolean
  userData?: User
}

export const UserProfile = ({ isAuth, userData }: Props) => {
  const [logout] = useLogOutMutation()

  if (!isAuth || !userData) {
    return (
      <Button as={Link} to={PATH.SIGN_IN} variant={'secondary'}>
        Sign In
      </Button>
    )
  }
  const { avatar, email, name } = userData

  const trigger = (
    <FlexContainer gap={'14px'}>
      <Typography className={cn} variant={'subtitle1'}>
        {name}
      </Typography>
      <Avatar name={name} size={'s'} src={avatar} />
    </FlexContainer>
  )

  return (
    <ProfileDropdown
      avatar={avatar}
      email={email}
      logout={() => logout()}
      name={name}
      trigger={trigger}
    />
  )
}
