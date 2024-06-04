import { ComponentPropsWithoutRef, ReactNode, useState } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

import s from './dropdown.module.scss'

type Props = {
  children?: ReactNode
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixDropdown.Root>

export const DropdownMenu = (props: Props) => {
  const { children, className, trigger, ...rest } = props
  const cn = {
    button: clsx(s.button),
    icon: clsx(s.icon),
    root: clsx(s.root),
  }

  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')

  return (
    <RadixDropdown.Root className={cn.root} {...rest}>
      <RadixDropdown.Trigger>{trigger}</RadixDropdown.Trigger>

      <RadixDropdown.Portal>
        <RadixDropdown.Content className={'RadixDropdownContent'} sideOffset={5}>
          {children}
          <RadixDropdown.Sub>
            <RadixDropdown.SubTrigger className={'RadixDropdownSubTrigger'}>
              More Tools
              <div className={'RightSlot'}>
                <ChevronRightIcon />
              </div>
            </RadixDropdown.SubTrigger>
            <RadixDropdown.Portal>
              <RadixDropdown.SubContent
                alignOffset={-5}
                className={'RadixDropdownSubContent'}
                sideOffset={2}
              >
                <RadixDropdown.Item className={'RadixDropdownItem'}>
                  Save Page As… <div className={'RightSlot'}>⌘+S</div>
                </RadixDropdown.Item>
                <RadixDropdown.Item className={'RadixDropdownItem'}>
                  Create Shortcut…
                </RadixDropdown.Item>
                <RadixDropdown.Item className={'RadixDropdownItem'}>
                  Name Window…
                </RadixDropdown.Item>
                <RadixDropdown.Separator className={'RadixDropdown.Separator'} />
                <RadixDropdown.Item className={'RadixDropdownItem'}>
                  Developer Tools
                </RadixDropdown.Item>
              </RadixDropdown.SubContent>
            </RadixDropdown.Portal>
          </RadixDropdown.Sub>

          <RadixDropdown.Separator className={'RadixDropdownSeparator'} />

          <RadixDropdown.CheckboxItem
            checked={bookmarksChecked}
            className={'RadixDropdownCheckboxItem'}
            onCheckedChange={setBookmarksChecked}
          >
            <RadixDropdown.ItemIndicator className={'RadixDropdownItemIndicator'}>
              <CheckIcon />
            </RadixDropdown.ItemIndicator>
            Show Bookmarks <div className={'RightSlot'}>⌘+B</div>
          </RadixDropdown.CheckboxItem>
          <RadixDropdown.CheckboxItem
            checked={urlsChecked}
            className={'RadixDropdownCheckboxItem'}
            onCheckedChange={setUrlsChecked}
          >
            <RadixDropdown.ItemIndicator className={'RadixDropdownItemIndicator'}>
              <CheckIcon />
            </RadixDropdown.ItemIndicator>
            Show Full URLs
          </RadixDropdown.CheckboxItem>

          <RadixDropdown.Separator className={'RadixDropdownSeparator'} />

          <RadixDropdown.Label className={'RadixDropdownLabel'}>People</RadixDropdown.Label>
          <RadixDropdown.RadioGroup onValueChange={setPerson} value={person}>
            <RadixDropdown.RadioItem className={'RadixDropdownRadioItem'} value={'pedro'}>
              <RadixDropdown.ItemIndicator className={'RadixDropdownItemIndicator'}>
                <DotFilledIcon />
              </RadixDropdown.ItemIndicator>
              Pedro Duarte
            </RadixDropdown.RadioItem>
            <RadixDropdown.RadioItem className={'RadixDropdownRadioItem'} value={'colm'}>
              <RadixDropdown.ItemIndicator className={'RadixDropdownItemIndicator'}>
                <DotFilledIcon />
              </RadixDropdown.ItemIndicator>
              Colm Tuite
            </RadixDropdown.RadioItem>
          </RadixDropdown.RadioGroup>

          <RadixDropdown.Arrow className={'RadixDropdownArrow'} />
        </RadixDropdown.Content>
      </RadixDropdown.Portal>
    </RadixDropdown.Root>
  )
}
