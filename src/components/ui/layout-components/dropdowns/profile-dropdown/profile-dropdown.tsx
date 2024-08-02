import { ReactNode, useState } from 'react'

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

export const ProfileDropdown = ({ avatar, email, name, trigger }: Props) => {
  const [logout] = useLogoutMutation()
  const [open, setOpen] = useState(false)

  const logoutHandler = () => {
    logout()
  }

  // const closeDropdownHandler = () => {
  //   setTimeout(() => setOpen(false), 0)
  // }

  return (
    <Root onOpenChange={setOpen} open={open}>
      <Trigger className={cn.trigger}>{trigger}</Trigger>
      <Content className={cn.menu}>
        <Arrow />
        <DropdownLabel email={email} name={name} photo={avatar ?? ''} />
        <DropdownItem
          icon={icons.profile}
          path={PATH.PROFILE}
          title={'My Profile'}
          // onClick={closeDropdownHandler}
        />
        <DropdownItem icon={icons.logout} noSeparator onClick={logoutHandler} title={'Sign Out'} />
      </Content>
    </Root>
  )
}
