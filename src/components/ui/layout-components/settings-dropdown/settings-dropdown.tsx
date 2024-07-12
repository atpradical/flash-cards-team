import { Link } from 'react-router-dom'

import { EditOutline, MoreVerticalOutline, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import { Typography } from '@/components/ui/primitives'
import {
  Arrow,
  Content,
  Item,
  Root,
  Separator,
  Trigger,
} from '@/components/ui/primitives/dropdown/dropdown'

import { cn } from './settings-dropdown.styles'

type DropdownSettingsProps = {
  learnDeckPath: string
  onDelete: () => void
  onEdit: () => void
}

export const SettingsDropdown = ({ learnDeckPath, onDelete, onEdit }: DropdownSettingsProps) => {
  return (
    <Root>
      <Trigger asChild className={cn.trigger}>
        <MoreVerticalOutline className={cn.triggerIcon} />
      </Trigger>
      <Content>
        <Arrow />
        <Item>
          <Typography as={Link} className={cn.option} to={learnDeckPath} variant={'caption'}>
            <PlayCircleOutline className={cn.icon} />
            Learn
          </Typography>
        </Item>
        <Separator />
        <Item onClick={onEdit}>
          <Typography className={cn.option} variant={'caption'}>
            <EditOutline className={cn.icon} />
            Edit
          </Typography>
        </Item>
        <Separator />
        <Item onClick={onDelete}>
          <Typography className={cn.option} variant={'caption'}>
            <TrashOutline className={cn.icon} />
            Delete
          </Typography>
        </Item>
      </Content>
    </Root>
  )
}
