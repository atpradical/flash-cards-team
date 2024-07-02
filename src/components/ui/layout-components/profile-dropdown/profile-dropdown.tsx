import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { LogOut, PersonOutline } from '@/assets/components/svgIcons'
import { User } from '@/common/types'
import { Avatar, Typography } from '@/components/ui/primitives'
import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/primitives/dropdown/dropdown'
import { PATH } from '@/shared/enums'
import clsx from 'clsx'

import s from './profile-dropdown.module.scss'

type Props = {
  trigger: ReactNode
} & User

export const ProfileDropdown = (props: Props) => {
  const { email, name, photo, trigger } = props
  const cn = {
    icon: clsx(s.icon),
    option: clsx(s.option),
    trigger: clsx(s.trigger),
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className={s.menu}>
        <DropdownMenuArrow />
        <DropdownMenuLabel>
          <Avatar size={'s'} src={photo.src} title={'Photo'} />
          <div>
            <Typography variant={'subtitle2'}>{name}</Typography>
            <Typography gray variant={'caption'}>
              {email}
            </Typography>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Typography as={Link} className={cn.option} to={PATH.PROFILE} variant={'caption'}>
            <PersonOutline className={cn.icon} />
            My Profile
          </Typography>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Typography as={Link} className={cn.option} to={PATH.SIGN_IN} variant={'caption'}>
            <LogOut className={cn.icon} />
            Sign Out
          </Typography>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
