import { Link, useParams } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets/icons'
import { LearnCard } from '@/components/ui/layout-components'
import { Button, Progress } from '@/components/ui/primitives'
import { GetRandomCardToLearnResponse } from '@/services/cards/cards.types'
import { Deck } from '@/services/decks/deck.types'
import { useGetDeckQuery, useGetRandomCardQuery } from '@/services/flashcards-api'
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
  const { deckId } = useParams()

  const {
    data: deck = {} as Deck,
    error: deckError,
    isLoading: isLoadingDeck,
  } = useGetDeckQuery({ id: deckId ?? '' })

  const {
    data: card = {} as GetRandomCardToLearnResponse,
    error: cardError,
    isLoading: isCardLoading,
  } = useGetRandomCardQuery({ id: deckId ?? '' })

  console.log(deckError, cardError)

  if (isLoadingDeck || isCardLoading) {
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
          <LearnCard card={card} deckName={deck.name} />
        </FlexContainer>
      </FlexContainer>
    </Page>
  )
}
