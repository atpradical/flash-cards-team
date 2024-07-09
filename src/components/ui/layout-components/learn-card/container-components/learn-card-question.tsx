import dummyQuestionCover from '@/assets/webp/dummy-question-cover.webp'
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
  const cover = questionImg ?? dummyQuestionCover

  return (
    <FlexContainer fd={'column'} gap={'18px'}>
      <FlexContainer>
        <Typography variant={'subtitle1'}>
          Question:&nbsp;
          <Typography className={cn.incoming} variant={'body1'}>
            {question}
          </Typography>
        </Typography>
      </FlexContainer>
      {cover && <Image alt={'Question image'} ratio={RATIO.L} src={cover} variant={'l'} />}
      <FlexContainer>
        <Typography className={cn.triesText} gray variant={'body2'}>
          Количество попыток ответов на вопрос:&nbsp;
          <Typography className={cn.triesCount} gray variant={'subtitle2'}>
            {shots}
          </Typography>
        </Typography>
      </FlexContainer>
    </FlexContainer>
  )
}
