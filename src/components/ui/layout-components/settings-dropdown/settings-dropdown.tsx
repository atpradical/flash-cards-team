import { Link } from 'react-router-dom'

import EditOutline from '@/assets/components/svgIcons/EditOutline'
import MoreVerticalOutline from '@/assets/components/svgIcons/MoreVerticalOutline'
import PlayCircleOutline from '@/assets/components/svgIcons/PlayCircleOutline'
import TrashOutline from '@/assets/components/svgIcons/TrashOutline'
import { Typography } from '@/components/ui/primitives'
import { Dropdown } from '@/components/ui/primitives/dropdown/dropdown'
import { DropdownItem } from '@/components/ui/primitives/dropdown/dropdownItem/dropdownItem'
import { DropdownSeparator } from '@/components/ui/primitives/dropdown/dropdownSeparator/dropdownSeparator'
import clsx from 'clsx'

import s from './settings-dropdown.module.scss'

type DropdownSettingsProps = {
  onDelete: () => void
  onEdit: () => void
}

export const SettingsDropdown = ({ onDelete, onEdit }: DropdownSettingsProps) => {
  const cn = {
    icon: clsx(s.icon),
    settingsItem: clsx(s.settingsItem),
    triggerIcon: clsx(s.triggerIcon),
  }

  return (
    <Dropdown trigger={<MoreVerticalOutline className={cn.triggerIcon} />}>
      <DropdownItem asChild>
        <Typography as={Link} className={cn.settingsItem} to={'/card'} variant={'caption'}>
          <PlayCircleOutline className={cn.icon} />
          Learn
        </Typography>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild onClick={onEdit}>
        <Typography className={cn.settingsItem} variant={'caption'}>
          <EditOutline className={cn.icon} />
          Edit
        </Typography>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild onClick={onDelete}>
        <Typography className={cn.settingsItem} variant={'caption'}>
          <TrashOutline className={cn.icon} />
          Delete
        </Typography>
      </DropdownItem>
    </Dropdown>
  )
}
