import { EditOutline, MoreVerticalOutline, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import { DropdownItem } from '@/components/ui/layout-components/dropdowns'
import { cn } from '@/components/ui/layout-components/dropdowns/dropdowns.styles'
import { Arrow, Content, Root, Trigger } from '@/components/ui/primitives'

type DropdownSettingsProps = {
  isAuthor?: boolean
  learnDeckPath: string
  onDelete: () => void
  onEdit: () => void
}

const icons = {
  delete: <TrashOutline className={cn.icon} />,
  edit: <EditOutline className={cn.icon} />,
  play: <PlayCircleOutline className={cn.icon} />,
}

export const SettingsDropdown = ({
  isAuthor,
  learnDeckPath,
  onDelete,
  onEdit,
}: DropdownSettingsProps) => {
  const trigger = <MoreVerticalOutline className={cn.triggerIcon} />

  return (
    <Root>
      <Trigger className={cn.trigger} title={'Deck settings'}>
        {trigger}
      </Trigger>
      <Content>
        <Arrow />
        <DropdownItem
          icon={icons.play}
          noSeparator={!isAuthor}
          path={learnDeckPath}
          title={'Learn'}
        />
        {isAuthor && <DropdownItem icon={icons.edit} onClick={onEdit} title={'Edit'} />}
        {isAuthor && (
          <DropdownItem icon={icons.delete} noSeparator onClick={onDelete} title={'Delete'} />
        )}
      </Content>
    </Root>
  )
}
