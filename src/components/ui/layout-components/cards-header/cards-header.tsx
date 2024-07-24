import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

import { IncubatorLogo } from '@/assets/icons'
import { UserProfile } from '@/components/ui/layout-components'
import { Button, Progress } from '@/components/ui/primitives'
import { useMeQuery } from '@/services'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'

type CardsHeaderProps = Omit<ComponentPropsWithoutRef<typeof Header>, 'load'>

export const CardsHeader = ({ ...propsHeader }: CardsHeaderProps) => {
  const { data, isError, isFetching } = useMeQuery() //?
  const isAuth = !isError

  return (
    <Header {...propsHeader}>
      <FlexContainer jc={'space-between'} pd={'0 20px'}>
        <Button as={Link} title={'Return to main page'} to={PATH.DECK_LIST} variant={'icon'}>
          <IncubatorLogo />
        </Button>
        <UserProfile isAuth={isAuth} userData={data} />
      </FlexContainer>
      {isFetching && <Progress />}
    </Header>
  )
}
