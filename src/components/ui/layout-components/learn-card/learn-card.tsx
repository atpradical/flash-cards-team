import { useCallback } from 'react'

import { Button, Card, Typography } from '@/components/ui/primitives'
import { GetRandomCardToLearnResponse } from '@/services'
import { FlexContainer } from '@/shared/ui/flex-container'

import { LearnCardAnswer as Answer, LearnCardQuestion as Question } from './container-components'
import { cn } from './learn-card.styles'

type LearnCardProps = {
  card?: GetRandomCardToLearnResponse
  deckName?: string
  onNextQuestion: (cardId: string, grade: number) => void
  onShowAnswer: (show: boolean) => void
  showAnswer: boolean
}

export const LearnCard = ({
  card,
  deckName,
  onNextQuestion,
  onShowAnswer,
  showAnswer,
}: LearnCardProps) => {
  const showAnswerHandler = useCallback(() => {
    onShowAnswer(true)
  }, [onShowAnswer])

  if (!card) {
    return null
  }

  const { answer, answerImg, id: cardId, question, questionImg, shots } = card

  return (
    <Card className={cn.container}>
      <FlexContainer ai={'flex-start'} fd={'column'} gap={'10px'}>
        <Typography as={'h1'} className={cn.title} variant={'h1'}>
          Learn &ldquo;{deckName ?? ''}&rdquo;
        </Typography>
        <Question question={question} questionImg={questionImg} shots={shots} />
        {showAnswer ? (
          <Answer
            answer={answer}
            answerImg={answerImg}
            cardId={cardId}
            onNextQuestion={onNextQuestion}
          />
        ) : (
          <Button className={cn.button} fullWidth onClick={showAnswerHandler}>
            Show Answer
          </Button>
        )}
      </FlexContainer>
    </Card>
  )
}
