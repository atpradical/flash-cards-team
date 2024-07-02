import { Link } from 'react-router-dom'

import EditOutline from '@/assets/components/svgIcons/EditOutline'
import MoreVerticalOutline from '@/assets/components/svgIcons/MoreVerticalOutline'
import PlayCircleOutline from '@/assets/components/svgIcons/PlayCircleOutline'
import TrashOutline from '@/assets/components/svgIcons/TrashOutline'
import { Typography } from '@/components/ui/primitives'
import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/primitives/dropdown/dropdown'
import { PATH } from '@/shared/enums'
import clsx from 'clsx'

import s from './settings-dropdown.module.scss'

type DropdownSettingsProps = {
  onDelete: () => void
  onEdit: () => void
}

export const SettingsDropdown = ({ onDelete, onEdit }: DropdownSettingsProps) => {
  const cn = {
    icon: clsx(s.icon),
    item: clsx(s.item),
    option: clsx(s.option),
    triggerIcon: clsx(s.triggerIcon),
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVerticalOutline className={cn.triggerIcon} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuArrow />
        <DropdownMenuItem>
          <Typography as={Link} className={cn.option} to={PATH.CARD} variant={'caption'}>
            <PlayCircleOutline className={cn.icon} />
            Learn
          </Typography>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onEdit}>
          <Typography className={cn.option} variant={'caption'}>
            <EditOutline className={cn.icon} />
            Edit
          </Typography>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onDelete}>
          <Typography className={cn.option} variant={'caption'}>
            <TrashOutline className={cn.icon} />
            Delete
          </Typography>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
