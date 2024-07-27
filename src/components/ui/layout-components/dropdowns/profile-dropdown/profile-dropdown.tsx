import { ReactNode } from 'react'

import { LogOut, PersonOutline } from '@/assets/icons'
import { Arrow, Content, Root, Trigger } from '@/components/ui/primitives'
import { User, useLogoutMutation } from '@/services'
import { PATH } from '@/shared/enums'

import { DropdownItem, DropdownLabel } from '../container-components'
import { cn } from '../dropdowns.styles'

type Props = {
  trigger: ReactNode
} & Pick<User, 'avatar' | 'email' | 'name'>

const icons = {
  logout: <LogOut className={cn.icon} />,
  profile: <PersonOutline className={cn.icon} />,
}

export const ProfileDropdown = (props: Props) => {
  const { avatar, email, name, trigger } = props
  const [logout] = useLogoutMutation()

  const logoutHandler = () => {
    logout()
  }

  return (
    <Root>
      <Trigger className={cn.trigger}>{trigger}</Trigger>
      <Content className={cn.menu}>
        <Arrow />
        <DropdownLabel email={email} name={name} photo={avatar} />
        <DropdownItem icon={icons.profile} path={PATH.PROFILE} title={'My Profile'} />
        <DropdownItem icon={icons.logout} noSeparator onClick={logoutHandler} title={'Sign Out'} />
      </Content>
    </Root>
  )
}
