import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Item, Separator, Typography } from '@/components/ui/primitives'

import { cn } from '../settings-dropdown.styles'

type Props = {
  icon: ReactNode
  path?: string
  separator?: boolean
  title: string
} & ComponentPropsWithoutRef<typeof Item>
export const SettingsDropdownItem = (props: Props) => {
  const { icon, onClick, path, separator = false, title, ...rest } = props

  return (
    <>
      <Item onClick={onClick} {...rest}>
        <Typography as={path ? Link : 'span'} className={cn.option} to={path} variant={'caption'}>
          {icon} {title}
        </Typography>
      </Item>
      {separator && <Separator />}
    </>
  )
}
