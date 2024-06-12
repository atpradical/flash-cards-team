import { LogOut, PersonOutline } from '@/assets/components/svgIcons'
import { Avatar } from '@/components/ui/avatar'
import { Dropdown } from '@/components/ui/dropdown/dropdown'
import { DropdownItem } from '@/components/ui/dropdown/dropdownItem/dropdownItem'
import { DropdownSeparator } from '@/components/ui/dropdown/dropdownSeparator/dropdownSeparator'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './dropdownProfile.module.scss'

type Props = {
  email: string
  name: string
  photo?: string
  photoDesc?: string
  profilePageHref: string
}

export const DropdownProfile = (props: Props) => {
  const { email, name, photo, photoDesc = 'Avatar', profilePageHref } = props
  const cn = {
    icon: clsx(s.icon),
    link: clsx(s.link),
    profileArea: clsx(s.profileArea),
  }

  return (
    <Dropdown trigger={<Avatar src={photo} title={photoDesc} />}>
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
