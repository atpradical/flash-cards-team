import { Link } from 'react-router-dom'

import { DeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { Actions } from '@/components/ui/layout-components'
import { Button, TableBody, TableContainer, TableRow } from '@/components/ui/primitives'
import { Deck, User } from '@/services'
import { DIALOG_ACTION, DIALOG_ENTITY, VARIANT } from '@/shared/enums'
import { useDeckListData } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'

import s from './deck-list-table-mobile.module.scss'

import { PositionCell } from '../container-components'

type DeckListTableMobileProps = {
  decks: Deck[]
  user: User
}
export const DeckListTableMobile = ({ decks, user }: DeckListTableMobileProps) => {
  const {
    deckData,
    deckId,
    openDeleteDeckHandler,
    openEditDeckHandler,
    processDeckData,
    setShowDeleteDeckDialog,
    setShowEditDeckDialog,
    showDeleteDeckDialog,
    showEditDeckDialog,
  } = useDeckListData(decks, user)

  return (
    <FlexContainer fw={'wrap'} gap={'24px'} jc={'space-around'}>
      {decks.map(el => {
        const { cardsCount, cover, deckPath, isAuthor, learnDeckPath, updated } =
          processDeckData(el)

        return (
          <TableContainer className={s.table} key={el.id}>
            <TableBody>
              <TableRow>
                <PositionCell className={s.cell} image={cover} jc={'space-between'}>
                  <Button as={Link} title={'Go to deck cards'} to={deckPath} variant={'link'}>
                    {el.name}
                  </Button>
                </PositionCell>
              </TableRow>
              <TableRow>
                <PositionCell className={s.cell} content={'Cards'} jc={'space-between'}>
                  <div>{cardsCount}</div>
                </PositionCell>
              </TableRow>
              <TableRow>
                <PositionCell className={s.cell} content={'Last Updated'} jc={'space-between'}>
                  <div>{updated}</div>
                </PositionCell>
              </TableRow>
              <TableRow>
                <PositionCell className={s.cell} content={'Created by'} jc={'space-between'}>
                  <div>{el.author.name}</div>
                </PositionCell>
              </TableRow>
              <TableRow>
                <Actions
                  id={el.id}
                  isEmptyDeck={el.cardsCount === 0}
                  isFavorite={el.isFavorite}
                  isMobile
                  onDelete={() => openDeleteDeckHandler(el.id)}
                  onEdit={() => openEditDeckHandler(el.id)}
                  onLearn={learnDeckPath}
                  variant={isAuthor ? VARIANT.ALL : VARIANT.ONLY_LEARN}
                />
              </TableRow>
            </TableBody>
          </TableContainer>
        )
      })}
      <DeckDialogForm
        action={DIALOG_ACTION.UPDATE}
        deck={deckData}
        key={deckData?.id}
        onOpenChange={setShowEditDeckDialog}
        open={showEditDeckDialog}
      />
      <DeleteDialogForm
        entity={DIALOG_ENTITY.DECK}
        entityId={deckId}
        name={deckData?.name ?? 'Deck name'}
        onOpenChange={setShowDeleteDeckDialog}
        open={showDeleteDeckDialog}
      />
    </FlexContainer>
  )
}
