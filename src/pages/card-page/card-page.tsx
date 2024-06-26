import { Card } from '@/components/ui/card'
import { LearnCard } from '@/components/ui/learn-card'
import { FlexContainer } from '@/shared/ui/flex-container'

export const CardPage = () => {
  return (
    <Card>
      <FlexContainer jc={'center'}>
        <LearnCard
          answer={'Венера'}
          deckName={'Солнечаня система'}
          question={'Самая горячая планета?'}
        />
      </FlexContainer>
    </Card>
  )
}
