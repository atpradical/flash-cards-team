import { Button, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'

type EmptyDeckProps = {
  createCardHandler: () => void
  isAuthor?: boolean
}

export const EmptyDeck = ({ createCardHandler, isAuthor = true }: EmptyDeckProps) => {
  console.log('isAuthor', isAuthor)

  return (
    <FlexContainer fd={'column'} gap={'30px'} jc={'center'}>
      <Typography gray variant={'body1'}>
        This pack is empty. Click add new card to fill this pack
      </Typography>
      {/* todo: add check if current Deck Author is me then show Button*/}
      {isAuthor && <Button onClick={createCardHandler}>Add New Card</Button>}
    </FlexContainer>
  )
}
