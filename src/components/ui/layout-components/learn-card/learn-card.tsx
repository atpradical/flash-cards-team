import { useState } from 'react'

import { Button, Card, Typography } from '@/components/ui/primitives'
import { GetRandomCardToLearnResponse, Grade } from '@/services/cards/cards.types'
import { FlexContainer } from '@/shared/ui/flex-container'

import { LearnCardAnswer as Answer, LearnCardQuestion as Question } from './container-components'
import { cn } from './learn-card.styles'

type LearnCardProps = {
  card: GetRandomCardToLearnResponse
  deckName: string
  onSubmit: (data: Grade) => void
}

export const LearnCard = ({ card, deckName, onSubmit }: LearnCardProps) => {
  const { answer, answerImg, question, questionImg, shots } = card

  const [showAnswer, setShowAnswer] = useState(false)

  const showAnswerHandler = () => {
    setShowAnswer(true)
  }

  const onSubmitHandler = (data: Grade) => {
    onSubmit(data)
  }

  return (
    <Card className={cn.container}>
      <FlexContainer ai={'flex-start'} fd={'column'} gap={'10px'}>
        <Typography as={'h1'} className={cn.title} variant={'h1'}>
          Learn &ldquo;{deckName}&rdquo;
        </Typography>
        <Question question={question} questionImg={questionImg} shots={shots} />
        {showAnswer ? (
          <Answer answer={answer} answerImg={answerImg} onSubmit={onSubmitHandler} />
        ) : (
          <Button className={cn.button} fullWidth onClick={showAnswerHandler}>
            Show Answer
          </Button>
        )}
      </FlexContainer>
    </Card>
  )
}
