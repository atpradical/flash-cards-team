import { LogOut, PersonOutline } from '@/assets/components/svgIcons'
import { Dropdown } from '@/components/ui/dropdown/dropdown'
import { DropdownItem } from '@/components/ui/dropdown/dropdownItem/dropdownItem'
import { DropdownSeparator } from '@/components/ui/dropdown/dropdownSeparator/dropdownSeparator'
import { Typography } from '@/components/ui/typography'

type Props = {
  email: string
  name: string
  photo: string
  photoDesc: string
  profilePageHref: string
}

export const UserDropdown = (props: Props) => {
  const { email, name, photo, photoDesc, profilePageHref } = props

  return (
    <Dropdown trigger={<img alt={photoDesc} src={photo} />}>
      <DropdownItem asChild>
        <a href={profilePageHref}>
          <img alt={photoDesc} src={photo} />
          <div>
            <Typography variant={'subtitle2'}>{name}</Typography>
            <Typography style={{ color: '#808080' }} variant={'caption'}>
              {email}
            </Typography>
          </div>
        </a>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>
        <PersonOutline color={'white'} height={'16'} width={'16'} />
        <Typography variant={'caption'}>My Profile</Typography>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>
        <LogOut color={'white'} height={'16'} width={'16'} />
        <Typography variant={'caption'}>Sign Out</Typography>
      </DropdownItem>
    </Dropdown>
  )
}
