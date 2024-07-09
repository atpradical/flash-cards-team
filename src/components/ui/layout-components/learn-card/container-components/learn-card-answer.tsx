import dummyCover from '@/assets/webp/dummy-cover.webp'
import { SelfRateForm } from '@/components/forms/self-rate-form/self-rate-form'
import { cn } from '@/components/ui/layout-components/learn-card/learn-card.styles'
import { Image, Typography } from '@/components/ui/primitives'
import { GetRandomCardToLearnResponse } from '@/services/cards/cards.types'
import { RATIO } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

type CardPageAnswerProps = {
  onSubmit: () => void
} & Pick<GetRandomCardToLearnResponse, 'answer' | 'answerImg'>
export const LearnCardAnswer = ({ answer, answerImg, onSubmit }: CardPageAnswerProps) => {
  const cover = answerImg ?? dummyCover

  return (
    <FlexContainer fd={'column'} gap={'18px'}>
      <FlexContainer>
        <Typography variant={'subtitle1'}>
          Answer:&nbsp;
          <Typography className={cn.incoming} variant={'body1'}>
            {answer}
          </Typography>
        </Typography>
      </FlexContainer>
      {cover && <Image alt={'Answer image'} ratio={RATIO.L} src={cover} variant={'l'} />}
      <SelfRateForm onSubmit={onSubmit} />
    </FlexContainer>
  )
}
