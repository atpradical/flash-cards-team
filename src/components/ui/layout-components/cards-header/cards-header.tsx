import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

import { IncubatorLogo, IncubatorLogoSmall } from '@/assets/icons'
import { UserProfile } from '@/components/ui/layout-components'
import { Button } from '@/components/ui/primitives'
import { User } from '@/services'
import { PATH, SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'

type CardsHeaderProps = {
  isAuth: boolean
  userData?: User
} & Omit<ComponentPropsWithoutRef<typeof Header>, 'load'>

export const CardsHeader = ({ isAuth, userData, ...propsHeader }: CardsHeaderProps) => {
  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.MOBILE

  const isMobile = currentScreenWidth <= breakpoint

  return (
    <Header {...propsHeader}>
      <FlexContainer jc={'space-between'} pd={'0 20px'}>
        <Button as={Link} title={'Return to main page'} to={PATH.DECK_LIST} variant={'icon'}>
          {isMobile ? <IncubatorLogoSmall /> : <IncubatorLogo />}
        </Button>
        <UserProfile isAuth={isAuth} userData={userData} />
      </FlexContainer>
    </Header>
  )
}
