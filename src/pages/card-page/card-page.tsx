import { Link } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets/icons'
import { LearnCard } from '@/components/ui/layout-components'
import { Button } from '@/components/ui/primitives'
import { cn } from '@/pages/card-page/card-page.styles'
import { useCardPageData } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const CardPage = () => {
  const { deck, deckPagePath, isLoad, nextQuestionHandler, randomCard, setShowAnswer, showAnswer } =
    useCardPageData()

  return (
    <Page load={isLoad}>
      <FlexContainer fd={'column'} gap={'36px'} jc={'left'} pd={'0 20px'}>
        <Button as={Link} className={cn.goBack} to={deckPagePath} variant={'link'}>
          <ArrowBackOutline className={cn.icon} />
          Back to Deck
        </Button>
        <FlexContainer jc={'center'}>
          <LearnCard
            card={randomCard}
            deckName={deck?.name}
            onNextQuestion={nextQuestionHandler}
            onShowAnswer={setShowAnswer}
            showAnswer={showAnswer}
          />
        </FlexContainer>
      </FlexContainer>
    </Page>
  )
}
