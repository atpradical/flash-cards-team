import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import Logo from '@/assets/components/svgIcons/Logo'
import { DropdownProfile } from '@/components/layout/userDropdown/dropdownProfile'
import { Card } from '@/components/ui/card'
import clsx from 'clsx'

import s from './header.module.scss'

import { FlexContainer } from '../flex-container'

type Props = ComponentPropsWithoutRef<typeof Card>

type PropsRef = ElementRef<typeof Card>

// @ts-ignore:  // todo: pass ref into header. Should be fixed once Card component be wrapped with forwardRef.
export const Header = forwardRef<PropsRef, Props>((props, ref) => {
  const { className, ...rest } = props

  const cn = clsx(s.header, className)

  type User = {
    email: string
    name: string
    photo: {
      alt: string
      src: string
    }
  }
  const mockUser: User = {
    email: 'j&johnson@gmail.com',
    name: 'Ivan',
    photo: {
      alt: 'Avatar',
      src: 'src/assets/webp/avatar-default.webp',
    },
  }

  return (
    <Card as={'header'} className={cn} {...rest}>
      <FlexContainer jc={'space-between'}>
        <Logo />
        <DropdownProfile
          email={mockUser.email}
          name={mockUser.name}
          photo={mockUser.photo.src}
          photoDesc={mockUser.photo.alt}
          profilePageHref={'https://google.com'}
        />
      </FlexContainer>
    </Card>
  )
})
