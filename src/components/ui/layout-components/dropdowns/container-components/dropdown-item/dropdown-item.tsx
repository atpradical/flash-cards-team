import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Button, Item, Separator } from '@/components/ui/primitives'

import { cn } from '../../dropdowns.styles'

type Props = {
  icon: ReactNode
  noSeparator?: boolean
  path?: string
  title: string
} & ComponentPropsWithoutRef<typeof Item>
export const DropdownItem = (props: Props) => {
  const { icon, noSeparator = false, onClick, path, title, ...rest } = props

  return (
    <>
      <Item onClick={onClick} {...rest}>
        <Button as={path ? Link : 'span'} className={cn.option} to={path} variant={'link'}>
          {icon} {title}
        </Button>
      </Item>
      {!noSeparator && <Separator />}
    </>
  )
}
