import * as RadixDropdown from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

type Props = {}

export const DropdownItem = (props: Props) => {
  const {} = props

  return (
    <RadixDropdown.Item className={s.item}>
      Save Page As… <div className={'RightSlot'}>⌘+S</div>
    </RadixDropdown.Item>
  )
}
