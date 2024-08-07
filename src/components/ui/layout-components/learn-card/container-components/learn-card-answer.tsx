import { SelfRateForm } from '@/components/forms/self-rate-form'
import { cn } from '@/components/ui/layout-components/learn-card/learn-card.styles'
import { Image, Typography } from '@/components/ui/primitives'
import { GetRandomCardToLearnResponse } from '@/services/cards/cards.types'
import { RATIO } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

type CardPageAnswerProps = {
  cardId: string
  onNextQuestion: (cardId: string, grade: number) => void
} & Pick<GetRandomCardToLearnResponse, 'answer' | 'answerImg'>

export const LearnCardAnswer = ({
  answer,
  answerImg,
  cardId,
  onNextQuestion,
}: CardPageAnswerProps) => {
  return (
    <FlexContainer fd={'column'} gap={'18px'}>
      <FlexContainer>
        <Typography as={'span'} variant={'subtitle1'}>
          Answer:&nbsp;
          <Typography as={'span'} className={cn.incoming} variant={'body1'}>
            {answer}
          </Typography>
        </Typography>
      </FlexContainer>
      {answerImg && <Image alt={'Answer'} ratio={RATIO.L} src={answerImg} variant={'l'} />}
      <SelfRateForm cardId={cardId} onNextQuestion={onNextQuestion} />
    </FlexContainer>
  )
}
