import Logo from '@/assets/components/svgIcons/Logo'
import { User, UserProfile } from '@/components/ui/user-profile'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'
import clsx from 'clsx'

import s from './cards-header.module.scss'

type CardsHeaderProps = {
  className?: string
  isAuthorized: boolean
}

const mockUser: User = {
  email: 'j&johnson@gmail.com',
  name: 'Ivan',
  photo: {
    alt: 'Avatar',
    src: 'src/assets/webp/avatar-default.webp',
  },
}

export const CardsHeader = ({ className, isAuthorized }: CardsHeaderProps) => {
  const cn = clsx(s.header, className)

  return (
    <Header className={cn}>
      <FlexContainer jc={'space-between'}>
        <Logo />
        <UserProfile isAuthorized={isAuthorized} userData={mockUser} />
      </FlexContainer>
    </Header>
  )
}
