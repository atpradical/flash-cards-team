import { ReactNode, useState } from 'react'

import dummyAnswerCover from '@/assets/webp/dummy-answer-cover.webp'
import dummyQuestionCover from '@/assets/webp/dummy-question-cover.webp'
import { SelfRateForm } from '@/components/forms/self-rate-form/self-rate-form'
import { CardListExample } from '@/components/ui/layout-components/deck-table/deck-table.mock'
import { Button, Card, Image, Typography } from '@/components/ui/primitives'
import { RATIO } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './learn-card.module.scss'

type SelfRateFormProps = {
  answer: string
  children?: ReactNode
  deckName: string
  question: string
  triesCount?: number
}

export const LearnCard = ({ answer, deckName, question, triesCount = 10 }: SelfRateFormProps) => {
  const [isAnswerShowed, setIsAnswerShowed] = useState<boolean>(false)
  const cn = {
    button: clsx(s.button),
    container: clsx(s.container),
    incoming: clsx(s.incoming),
    title: clsx(s.title),
    triesCount: clsx(s.incoming),
    triesText: clsx(s.hint),
  }

  const onSubmitHandler = () => {}
  const showAnswerHandler = () => {
    setIsAnswerShowed(true)
  }
  const questionCover = CardListExample[0].questionImg ?? dummyQuestionCover
  const answerCover = CardListExample[0].answerImg ?? dummyAnswerCover

  return (
    <Card className={cn.container}>
      <FlexContainer ai={'flex-start'} fd={'column'} gap={'10px'}>
        <Typography as={'h1'} className={cn.title} variant={'h1'}>
          Learn &ldquo;{deckName}&rdquo;
        </Typography>
        <FlexContainer fd={'column'} gap={'18px'}>
          <FlexContainer>
            <Typography variant={'subtitle1'}>Question:</Typography>
            <Typography className={cn.incoming} variant={'body1'}>
              {question}
            </Typography>
          </FlexContainer>
          {questionCover && (
            <Image alt={'Question image'} ratio={RATIO.L} src={questionCover} variant={'l'} />
          )}
          <FlexContainer>
            <Typography className={cn.triesText} gray variant={'body2'}>
              Количество попыток ответов на вопрос:
            </Typography>
            <Typography className={cn.triesCount} gray variant={'subtitle2'}>
              {triesCount}
            </Typography>
          </FlexContainer>
        </FlexContainer>
        {isAnswerShowed ? (
          <FlexContainer fd={'column'} gap={'18px'}>
            <FlexContainer>
              <Typography variant={'subtitle1'}>Answer:</Typography>
              <Typography className={cn.incoming} variant={'body1'}>
                {answer}
              </Typography>
            </FlexContainer>
            {answerCover && (
              <Image alt={'Answer image'} ratio={RATIO.L} src={answerCover} variant={'l'} />
            )}
            <SelfRateForm onSubmit={onSubmitHandler} />
          </FlexContainer>
        ) : (
          <Button className={cn.button} fullWidth onClick={showAnswerHandler}>
            Show Answer
          </Button>
        )}
      </FlexContainer>
    </Card>
  )
}
