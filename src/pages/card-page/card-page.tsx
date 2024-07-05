import { Link, useParams } from 'react-router-dom'

import ArrowBackOutline from '@/assets/components/svgIcons/ArrowBackOutline'
import { LearnCard } from '@/components/ui/layout-components'
import { Button, Progress } from '@/components/ui/primitives'
import { useGetCardQuery } from '@/services/flashcards-api'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'
import clsx from 'clsx'

import s from './card-page.module.scss'

export const CardPage = () => {
  const cn = {
    goBack: clsx(s.goBack),
    icon: clsx(s.icon),
  }
  const { cardId } = useParams()
  const { data, error, isLoading } = useGetCardQuery({ id: cardId ?? '' })
  // todo: replace deck name depending on "name" property in RTK request for deck
  const deckName = 'Coins'

  console.log(error)

  if (isLoading) {
    return <Progress />
  }

  return (
    <Page>
      <FlexContainer fd={'column'} gap={'36px'} jc={'left'} pd={'0 20px'}>
        <Button as={Link} className={cn.goBack} to={PATH.DECK} variant={'link'}>
          <ArrowBackOutline className={cn.icon} />
          Back to Deck
        </Button>
        <FlexContainer jc={'center'}>
          <LearnCard
            answer={data?.answer ?? ''}
            deckName={deckName}
            question={data?.question ?? ''}
          />
        </FlexContainer>
      </FlexContainer>
    </Page>
  )
}
