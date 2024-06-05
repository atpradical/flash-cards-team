import Edit2Outline from '@/assets/components/svgIcons/Edit2Outline'
import MoreVerticalOutline from '@/assets/components/svgIcons/MoreVerticalOutline'
import PlayCircleOutline from '@/assets/components/svgIcons/PlayCircleOutline'
import TrashOutline from '@/assets/components/svgIcons/TrashOutline'
import { Dropdown } from '@/components/ui/dropdown/dropdown'
import { DropdownItem } from '@/components/ui/dropdown/dropdownItem/dropdownItem'
import { DropdownSeparator } from '@/components/ui/dropdown/dropdownSeparator/dropdownSeparator'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/dropdown/dropdownItem/dropdownItem.module.scss'

export const DeckSettingsDropdown = () => {
  return (
    <Dropdown trigger={<MoreVerticalOutline />}>
      <DropdownItem asChild>
        <a>
          <PlayCircleOutline style={{ width: '16px' }} />
          <Typography variant={'caption'}>Learn</Typography>
        </a>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild>
        <a>
          <Edit2Outline style={{ width: '16px' }} />
          <Typography variant={'caption'}>Edit</Typography>
        </a>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild className={s.item}>
        <a className={s.item}>
          <TrashOutline style={{ width: '16px' }} />
          <Typography variant={'caption'}>Delete</Typography>
        </a>
      </DropdownItem>
    </Dropdown>
  )
}
