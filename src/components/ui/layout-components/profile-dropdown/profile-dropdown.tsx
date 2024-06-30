import { ReactNode } from 'react'

import { LogOut, PersonOutline } from '@/assets/components/svgIcons'
import { Avatar, Typography } from '@/components/ui/primitives'
import { Dropdown } from '@/components/ui/primitives/dropdown/dropdown'
import { DropdownItem } from '@/components/ui/primitives/dropdown/dropdownItem/dropdownItem'
import { DropdownSeparator } from '@/components/ui/primitives/dropdown/dropdownSeparator/dropdownSeparator'
import clsx from 'clsx'

import s from './profile-dropdown.module.scss'

type Props = {
  email: string
  name: string
  photo?: string
  photoDesc?: string
  profilePageHref: string
  trigger: ReactNode
}

export const ProfileDropdown = (props: Props) => {
  const { email, name, photo, profilePageHref, trigger } = props
  const cn = {
    icon: clsx(s.icon),
    link: clsx(s.link),
    profileArea: clsx(s.profileArea),
  }

  return (
    <Dropdown trigger={trigger}>
      <DropdownItem asChild>
        <Typography as={'a'} className={s.profileArea} href={profilePageHref}>
          <Avatar size={'s'} src={photo} title={'Photo'} />
          <div>
            <Typography variant={'subtitle2'}>{name}</Typography>
            <Typography className={cn.link} variant={'caption'}>
              {email}
            </Typography>
          </div>
        </Typography>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>
        <PersonOutline className={cn.icon} />
        <Typography variant={'caption'}>My Profile</Typography>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>
        <LogOut className={cn.icon} />
        <Typography variant={'caption'}>Sign Out</Typography>
      </DropdownItem>
    </Dropdown>
  )
}
