import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Item, Separator, Typography } from '@/components/ui/primitives'

import { cn } from '../../dropdowns.styles'

type Props = {
  icon: ReactNode
  noSeparator?: boolean
  path?: string
  title: string
} & ComponentPropsWithoutRef<typeof Item>
export const DropdownItem = (props: Props) => {
  const { icon, noSeparator = false, path, title, ...rest } = props

  return (
    <>
      <Item {...rest}>
        <Typography as={path ? Link : 'span'} className={cn.option} to={path} variant={'caption'}>
          {icon} {title}
        </Typography>
      </Item>
      {!noSeparator && <Separator />}
    </>
  )
}
