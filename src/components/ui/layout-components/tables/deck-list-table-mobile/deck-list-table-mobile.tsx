import { Link } from 'react-router-dom'

import { DeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { Actions } from '@/components/ui/layout-components'
import { Button, TableContainer, TableHeader, TableRow } from '@/components/ui/primitives'
import { Deck, User } from '@/services'
import { DIALOG_ACTION, DIALOG_ENTITY, VARIANT } from '@/shared/enums'
import { useDeckListData } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'

import s from './deck-list-table-mobile.module.scss'

import { HeaderCell, PositionCell } from '../container-components'

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
    <TableContainer className={s.tableContainer}>
      <FlexContainer fw={'wrap'} gap={'24px'} jc={'space-around'}>
        {decks.map(el => {
          const { cardsCount, cover, deckPath, isAuthor, learnDeckPath, updated } =
            processDeckData(el)

          return (
            <div className={s.tableItem} key={el.id}>
              <TableHeader>
                <TableRow>
                  <PositionCell className={s.positionCell} image={cover} />
                  <PositionCell className={s.positionCell} jc={'end'}>
                    <Button as={Link} title={'Go to deck cards'} to={deckPath} variant={'link'}>
                      {el.name}
                    </Button>
                  </PositionCell>
                </TableRow>
                <TableRow>
                  <HeaderCell className={s.headerCell} content={'Cards'} sortable={false} />
                  <PositionCell className={s.positionCell} content={cardsCount} jc={'end'} />
                </TableRow>
                <TableRow>
                  <HeaderCell className={s.headerCell} content={'Last Updated'} sortable={false} />
                  <PositionCell className={s.positionCell} content={updated} jc={'end'} />
                </TableRow>
                <TableRow>
                  <HeaderCell className={s.headerCell} content={'Created by'} sortable={false} />
                  <PositionCell className={s.positionCell} content={el.author.name} jc={'end'} />
                </TableRow>
              </TableHeader>
              <Actions
                id={el.id}
                isFavorite={el.isFavorite}
                isMobile
                onDelete={() => openDeleteDeckHandler(el.id)}
                onEdit={() => openEditDeckHandler(el.id)}
                onLearn={learnDeckPath}
                variant={isAuthor ? VARIANT.ALL : VARIANT.ONLY_LEARN}
              />
            </div>
          )
        })}
      </FlexContainer>
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
    </TableContainer>
  )
}
