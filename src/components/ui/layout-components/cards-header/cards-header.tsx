import { ComponentPropsWithoutRef } from 'react'

import { IncubatorLogo } from '@/assets/components/svgIcons'
import { User } from '@/common/types'
import { UserProfile } from '@/components/ui/layout-components'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'

type CardsHeaderProps = {
  isAuthorized?: boolean
} & ComponentPropsWithoutRef<typeof Header>

const mockUser: User = {
  email: 'j&johnson@gmail.com',
  name: 'Ivan',
  photo: {
    alt: 'Avatar',
    src: 'src/assets/webp/avatar-default.webp',
  },
}

export const CardsHeader = ({
  isAuthorized = false,
  userData,
  ...propsHeader
}: CardsHeaderProps) => {
  return (
    <Header {...propsHeader}>
      <FlexContainer jc={'space-between'} pd={'0 20px'}>
        <IncubatorLogo />
        <UserProfile isAuthorized={isAuthorized} userData={mockUser} />
      </FlexContainer>
    </Header>
  )
}
