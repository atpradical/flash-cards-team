import { Button, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'

type EmptyDeckProps = {
  createCardHandler: () => void
  title?: string
}

export const EmptyDeck = ({ createCardHandler, title = 'Name Deck' }: EmptyDeckProps) => {
  return (
    <FlexContainer fd={'column'} gap={'30px'} jc={'center'}>
      <FlexContainer pd={'0 0 40px 0'}>
        <Typography as={'h1'} variant={'h1'}>
          {title}
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
