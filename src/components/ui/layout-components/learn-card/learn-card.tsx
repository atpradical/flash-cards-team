import { ReactNode, useState } from 'react'

import dummyAnswerCover from '@/assets/webp/dummy-answer-cover.webp'
import dummyQuestionCover from '@/assets/webp/dummy-question-cover.webp'
import { ASPECT_RATIO } from '@/common/enums/aspect-ratio'
import { SelfRateForm } from '@/components/forms/self-rate-form/self-rate-form'
import { CardListExample } from '@/components/ui/layout-components/deck-table/deck-table.mock'
import { AspectRatio, Button, Card, Typography } from '@/components/ui/primitives'
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
    image: clsx(s.image),
    incoming: clsx(s.incoming),
    ratio: clsx(s.ratio),
    text: clsx(s.text),
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
      <FlexContainer ai={'flex-start'} fd={'column'}>
        <Typography as={'h1'} className={cn.title} variant={'h1'}>
          Learn &ldquo;{deckName}&rdquo;
        </Typography>
        <div>
          <Typography className={cn.text} variant={'subtitle1'}>
            Question:
          </Typography>
          <Typography className={cn.incoming} variant={'body1'}>
            {question}
          </Typography>
        </div>
        {CardListExample[0] && (
          <AspectRatio className={cn.ratio} ratio={ASPECT_RATIO.Standard} variant={'l'}>
            <img alt={'Question image'} className={cn.image} src={questionCover} />
          </AspectRatio>
        )}
        <div>
          <Typography className={cn.triesText} gray>
            Количество попыток ответов на вопрос:
          </Typography>
          <Typography className={cn.triesCount} gray variant={'subtitle2'}>
            {triesCount}
          </Typography>
        </div>
        {isAnswerShowed ? (
          <>
            <div>
              <Typography className={cn.text} variant={'subtitle1'}>
                Answer:
              </Typography>
              <Typography className={cn.incoming} variant={'body1'}>
                {answer}
              </Typography>
              {CardListExample[0] && (
                <AspectRatio className={cn.ratio} ratio={ASPECT_RATIO.Standard} variant={'l'}>
                  <img alt={'Question image'} className={cn.image} src={answerCover} />
                </AspectRatio>
              )}
            </div>
            <SelfRateForm onSubmit={onSubmitHandler} />
          </>
        ) : (
          <Button className={cn.button} fullWidth onClick={showAnswerHandler}>
            Show Answer
          </Button>
        )}
      </FlexContainer>
    </Card>
  )
}
