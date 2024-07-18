import { Link, generatePath, useParams } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets/icons'
import { LearnCard } from '@/components/ui/layout-components'
import { Button, Progress } from '@/components/ui/primitives'
import { cn } from '@/pages/card-page/card-page.styles'
import {
  Deck,
  GetRandomCardToLearnResponse,
  Grade,
  useGetDeckQuery,
  useGetRandomCardQuery,
  useSaveGradeCardMutation,
} from '@/services'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const CardPage = () => {
  const { deckId } = useParams()
  const deckPagePath = deckId && generatePath(PATH.DECK, { deckId })

  const {
    data: deck = {} as Deck,
    error: deckError,
    isLoading: isLoadingDeck,
  } = useGetDeckQuery({ id: deckId ?? '' })

  const {
    data: card = {} as GetRandomCardToLearnResponse,
    error: cardError,
    isLoading: isCardLoading,
    refetch,
  } = useGetRandomCardQuery({ id: deckId ?? '' })

  const [saveGrade, { isLoading }] = useSaveGradeCardMutation()

  const onSubmit = async (data: Grade) => {
    await saveGrade({
      cardId: card.id,
      grade: Number(data.grade),
    })
      .unwrap()
      .then(res => {
        if (res.id === card.id) {
          console.log('no cards anymore')
        }
        refetch()
      })
  }

  console.log('deckError, cardError', deckError, cardError)
  console.log('card.id', card.id)

  if (isLoadingDeck || isCardLoading || isLoading) {
    return <Progress />
  }

  return (
    <Page>
      <FlexContainer fd={'column'} gap={'36px'} jc={'left'} pd={'0 20px'}>
        <Button as={Link} className={cn.goBack} to={deckPagePath} variant={'link'}>
          <ArrowBackOutline className={cn.icon} />
          Back to Deck
        </Button>
        <FlexContainer jc={'center'}>
          <LearnCard card={card} deckName={deck.name} onSubmit={onSubmit} />
        </FlexContainer>
      </FlexContainer>
    </Page>
  )
}
