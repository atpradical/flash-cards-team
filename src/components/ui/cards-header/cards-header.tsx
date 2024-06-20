import Logo from '@/assets/components/svgIcons/Logo'
import { DropdownProfile } from '@/components/layout/userDropdown/dropdownProfile'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './cards-header.module.scss'

import { Card } from '../card/card'
import { Typography } from '../typography'

type CardsHeaderProps = {
  className?: string
}

export const CardsHeader = ({ className }: CardsHeaderProps) => {
  const cn = {
    header: clsx(s.header, className),
    name: clsx(s.name),
  }

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
    <Card as={'header'} className={cn}>
      <FlexContainer jc={'space-between'}>
        <Logo />
        <FlexContainer jc={'flex-end'}>
          <Typography className={cn.name} variant={'subtitle1'}>
            {mockUser.name}
          </Typography>
          <DropdownProfile
            // className={cn.dropdown}
            email={mockUser.email}
            name={mockUser.name}
            photo={mockUser.photo.src}
            photoDesc={mockUser.photo.alt}
            profilePageHref={'https://google.com'}
          />
        </FlexContainer>
      </FlexContainer>
    </Card>
  )
}
