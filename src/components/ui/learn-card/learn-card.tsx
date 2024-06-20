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
  question: string
  triesCount?: number
}

export const LearnCard = ({ answer, question, triesCount = 10 }: SelfRateFormProps) => {
  const [isAnswerShoved, setIsAnswerShoved] = useState<boolean>(false)
  const cn = {
    button: clsx(s.button),
    container: clsx(s.container),
    form: clsx(s.form),
    hint: clsx(s.hint),
    title: clsx(s.title),
  }

  const onSubmitHandler = () => {}
  const showAnswerHandler = () => {
    setIsAnswerShoved(true)
  }

  return (
    <Card className={cn.container}>
      <FlexContainer ai={'flex-start'} fd={'column'}>
        <Typography className={cn.title} variant={'h1'}>
          Learn &quot;Deck Name&quot;
        </Typography>
        <FlexContainer ai={'flex-start'} fd={'row'} gap={'0.15rem'}>
          <Typography variant={'subtitle1'}>Question:</Typography>
          <Typography variant={'body1'}>{question}</Typography>
        </FlexContainer>
        <FlexContainer fd={'row'} gap={'0.15rem'}>
          <Typography className={cn.hint} variant={'body2'}>
            Количество попыток ответов на вопрос:
          </Typography>
          <Typography className={cn.hint} variant={'subtitle2'}>
            {triesCount}
          </Typography>
        </FlexContainer>
        {isAnswerShoved ? (
          <>
            <FlexContainer ai={'flex-start'} fd={'row'} gap={'0.15rem'}>
              <Typography variant={'subtitle1'}>Answer:</Typography>
              <Typography variant={'body1'}>{answer}</Typography>
            </FlexContainer>
            <SelfRateForm onSubmit={onSubmitHandler} />
          </>
        ) : (
          <Button fullWidth onClick={showAnswerHandler}>
            Show Answer
          </Button>
        )}
      </FlexContainer>
    </Card>
  )
}
