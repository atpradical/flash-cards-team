import { useState } from 'react'

import { SelfRateForm } from '@/components/forms/self-rate-form/self-rate-form'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './learn-card.module.scss'

type SelfRateFormProps = {
  answer: string
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
    text: clsx(s.text),
    title: clsx(s.title),
    triesCount: clsx(s.hint, s.incoming),
    triesText: clsx(s.hint),
  }

  const onSubmitHandler = () => {}
  const showAnswerHandler = () => {
    setIsAnswerShowed(true)
  }

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
        <div>
          <Typography className={cn.triesText} variant={'body2'}>
            Количество попыток ответов на вопрос:
          </Typography>
          <Typography className={cn.triesCount} variant={'subtitle2'}>
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
