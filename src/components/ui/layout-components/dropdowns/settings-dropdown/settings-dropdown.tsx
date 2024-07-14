import { EditOutline, MoreVerticalOutline, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import { Arrow, Content, Root, Trigger } from '@/components/ui/primitives'

import { DropdownItem } from '../container-components'
import { cn } from '../dropdowns.styles'

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
  const trigger = <MoreVerticalOutline className={cn.triggerIcon} />

  return (
    <Root>
      <Trigger className={cn.trigger}>{trigger}</Trigger>
      <Content>
        <Arrow />
        <DropdownItem icon={icons.play} path={learnDeckPath} title={'Learn'} />
        <DropdownItem icon={icons.edit} onClick={onEdit} title={'Edit'} />
        <DropdownItem icon={icons.delete} noSep onClick={onDelete} title={'Delete'} />
      </Content>
    </Root>
  )
}
