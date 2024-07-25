import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

import { IncubatorLogo } from '@/assets/icons'
import { UserProfile } from '@/components/ui/layout-components'
import { Button, Progress } from '@/components/ui/primitives'
import { User } from '@/services'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'

type CardsHeaderProps = {
  isAuth: boolean
  isFetching: boolean
  userData?: User
} & Omit<ComponentPropsWithoutRef<typeof Header>, 'load'>

export const CardsHeader = ({ isAuth, isFetching, userData, ...props }: CardsHeaderProps) => {
  return (
    <Header {...props}>
      <FlexContainer jc={'space-between'} pd={'0 20px'}>
        <Button as={Link} title={'Return to main page'} to={PATH.DECK_LIST} variant={'icon'}>
          <IncubatorLogo />
        </Button>
        <UserProfile isAuth={isAuth} userData={userData} />
      </FlexContainer>
      {isFetching && <Progress />}
    </Header>
  )
}
