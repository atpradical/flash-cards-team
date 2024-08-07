import { Button, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'

type EmptyDeckProps = {
  isAuthor?: boolean
  onClick: (open: boolean) => void
}

export const EmptyDeck = ({ isAuthor = true, onClick }: EmptyDeckProps) => {
  return (
    <FlexContainer fd={'column'} gap={'30px'} jc={'center'}>
      <Typography gray variant={'body1'}>
        This deck is empty. {isAuthor && 'Click add new card to fill this deck.'}
      </Typography>
      {isAuthor && <Button onClick={onClick}>Add New Card</Button>}
    </FlexContainer>
  )
}
