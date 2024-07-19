import { cn } from '@/components/ui/layout-components/learn-card/learn-card.styles'
import { Image, Typography } from '@/components/ui/primitives'
import { GetRandomCardToLearnResponse } from '@/services/cards/cards.types'
import { RATIO } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

type CardPageQuestionProps = Pick<
  GetRandomCardToLearnResponse,
  'question' | 'questionImg' | 'shots'
>

export const LearnCardQuestion = ({ question, questionImg, shots }: CardPageQuestionProps) => {
  return (
    <FlexContainer fd={'column'} gap={'18px'}>
      <FlexContainer>
        <Typography as={'span'} variant={'subtitle1'}>
          Question:&nbsp;
          <Typography as={'span'} className={cn.incoming} variant={'body1'}>
            {question}
          </Typography>
        </Typography>
      </FlexContainer>
      {questionImg && <Image alt={'Question'} ratio={RATIO.L} src={questionImg} variant={'l'} />}
      <FlexContainer>
        <Typography as={'span'} className={cn.triesText} gray variant={'body2'}>
          Количество попыток ответов на вопрос:&nbsp;
          <Typography as={'span'} className={cn.triesCount} gray variant={'subtitle2'}>
            {shots}
          </Typography>
        </Typography>
      </FlexContainer>
    </FlexContainer>
  )
}
