import { EditOutline, MoreVerticalOutline, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import { Arrow, Content, Root, Trigger } from '@/components/ui/primitives/dropdown/dropdown'

import { SettingsDropdownItem as DropdownItem } from './container-components/settings-dropdown-item'
import { cn } from './settings-dropdown.styles'

type DropdownSettingsProps = {
  learnDeckPath: string
  onDelete: () => void
  onEdit: () => void
}

const icons = {
  delete: <TrashOutline className={cn.icon} />,
  edit: <EditOutline className={cn.icon} />,
  play: <PlayCircleOutline className={cn.icon} />,
}

export const SettingsDropdown = ({ learnDeckPath, onDelete, onEdit }: DropdownSettingsProps) => {
  return (
    <Root>
      <Trigger asChild className={cn.trigger}>
        <MoreVerticalOutline className={cn.triggerIcon} />
      </Trigger>
      <Content>
        <Arrow />
        <DropdownItem icon={icons.play} path={learnDeckPath} separator title={'Learn'} />
        <DropdownItem icon={icons.edit} onClick={onEdit} separator title={'Edit'} />
        <DropdownItem icon={icons.delete} onClick={onDelete} title={'Delete'} />
      </Content>
    </Root>
  )
}
