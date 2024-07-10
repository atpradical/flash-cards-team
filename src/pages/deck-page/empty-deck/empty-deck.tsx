import { Button, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'

type EmptyDeckProps = {
  createCardHandler: () => void
}
// вообще не вижу смысла зачем EmptyDeck titlt, излишне для пустой колоды
export const EmptyDeck = ({ createCardHandler }: EmptyDeckProps) => {
  return (
    <FlexContainer fd={'column'} gap={'30px'} jc={'center'}>
      <FlexContainer pd={'0 0 40px 0'}>
        <Typography as={'h1'} variant={'h1'}>
          {'Name Deck'}
        </Typography>
      </FlexContainer>
      <Typography gray variant={'body1'}>
        This pack is empty. Click add new card to fill this pack
      </Typography>
      {/* todo: add check if current Deck Author is me then show Button*/}
      <Button onClick={createCardHandler}>Add New Card</Button>
    </FlexContainer>
  )
}
