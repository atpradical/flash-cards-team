import { ComponentPropsWithoutRef } from 'react'

import Logo from '@/assets/components/svgIcons/Logo'
import { UserProfile } from '@/components/ui/user-profile'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'
import { User } from '@/types'

type CardsHeaderProps = {
  isAuthorized: boolean
} & ComponentPropsWithoutRef<typeof Header>

const mockUser: User = {
  email: 'j&johnson@gmail.com',
  name: 'Ivan',
  photo: {
    alt: 'Avatar',
    src: 'src/assets/webp/avatar-default.webp',
  },
}

export const CardsHeader = ({ isAuthorized, userData, ...propsHeader }: CardsHeaderProps) => {
  return (
    <Header {...propsHeader}>
      <FlexContainer jc={'space-between'}>
        <Logo />
        <UserProfile isAuthorized={isAuthorized} userData={mockUser} />
      </FlexContainer>
    </Header>
  )
}
