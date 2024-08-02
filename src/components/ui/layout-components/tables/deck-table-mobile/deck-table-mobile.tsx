import { CardDialogForm, DeleteDialogForm } from '@/components/forms'
import { Actions } from '@/components/ui/layout-components'
import {
  HeaderCell,
  PositionCell,
} from '@/components/ui/layout-components/tables/container-components'
import { Grade, TableContainer, TableHeader, TableRow } from '@/components/ui/primitives'
import { Card } from '@/services'
import { DIALOG_ACTION, DIALOG_ENTITY, VARIANT } from '@/shared/enums'
import { useDeckTableData } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'

import s from '../deck-list-table-mobile/deck-list-table-mobile.module.scss'

type DeckTableMobileProps = {
  cards: Card[]
  isAuthor: boolean
}

export const DeckTableMobile = ({ cards, isAuthor }: DeckTableMobileProps) => {
  const {
    cardData,
    cardId,
    onDeleteHandler,
    onEditHandler,
    processCardData,
    setShowDeleteCardDialogForm,
    setShowUpdateCardDialogForm,
    showDeleteCardDialogForm,
    showUpdateCardDialogForm,
  } = useDeckTableData(cards)

  return (
    <TableContainer className={s.tableContainer}>
      <FlexContainer fw={'wrap'} gap={'24px'} jc={'space-around'}>
        {cards.map(el => {
          const { answerCover, questionCover, truncatedAnswer, truncatedQuestion, updated } =
            processCardData(el)

          return (
            <div className={s.tableItem} key={el.id}>
              <TableHeader>
                <TableRow>
                  <PositionCell className={s.positionCell} image={questionCover} />
                  <PositionCell
                    className={s.positionCell}
                    content={truncatedQuestion}
                    entity={'Question'}
                    jc={'end'}
                  />
                </TableRow>
                <TableRow>
                  <PositionCell className={s.positionCell} image={answerCover} />
                  <PositionCell
                    className={s.positionCell}
                    content={truncatedAnswer}
                    entity={'Answer'}
                    jc={'end'}
                  />
                </TableRow>
                <TableRow>
                  <HeaderCell className={s.headerCell} content={'Last Updated'} sortable={false} />
                  <PositionCell className={s.positionCell} content={updated} jc={'end'} />
                </TableRow>
                <TableRow>
                  <HeaderCell className={s.headerCell} content={'Grade'} sortable={false} />
                  <PositionCell className={s.positionCell} jc={'end'}>
                    <Grade stars={el.grade} />
                  </PositionCell>
                </TableRow>
              </TableHeader>
              {isAuthor && (
                <Actions
                  id={el.id}
                  isMobile
                  onDelete={() => onDeleteHandler(el.id)}
                  onEdit={() => onEditHandler(el.id)}
                  variant={VARIANT.ONLY_EDITS}
                />
              )}
            </div>
          )
        })}
      </FlexContainer>
      <CardDialogForm
        action={DIALOG_ACTION.UPDATE}
        card={cardData}
        key={cardData?.id}
        onOpenChange={setShowUpdateCardDialogForm}
        open={showUpdateCardDialogForm}
      />
      <DeleteDialogForm
        entity={DIALOG_ENTITY.CARD}
        entityId={cardId}
        name={cardData?.question ?? ''}
        onOpenChange={setShowDeleteCardDialogForm}
        open={showDeleteCardDialogForm}
      />
    </TableContainer>
  )
}
