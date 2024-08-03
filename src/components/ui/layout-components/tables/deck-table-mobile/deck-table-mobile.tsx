import { CardDialogForm, DeleteDialogForm } from '@/components/forms'
import { Actions } from '@/components/ui/layout-components'
import { PositionCell } from '@/components/ui/layout-components/tables/container-components'
import { Grade, TableBody, TableContainer, TableRow } from '@/components/ui/primitives'
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
    <FlexContainer fw={'wrap'} gap={'24px'} jc={'space-around'}>
      {cards.map(el => {
        const { answerCover, questionCover, truncatedAnswer, truncatedQuestion, updated } =
          processCardData(el)

        return (
          <TableContainer className={s.table} key={el.id}>
            <TableBody>
              <TableRow>
                <PositionCell
                  className={s.cell}
                  entity={'Question'}
                  image={questionCover}
                  jc={'space-between'}
                >
                  <div>{truncatedQuestion}</div>
                </PositionCell>
              </TableRow>
              <TableRow>
                <PositionCell
                  className={s.cell}
                  entity={'Answer'}
                  image={answerCover}
                  jc={'space-between'}
                >
                  <div>{truncatedAnswer}</div>
                </PositionCell>
              </TableRow>
              <TableRow>
                <PositionCell className={s.cell} content={'Last Updated'} jc={'space-between'}>
                  <div>{updated}</div>
                </PositionCell>
              </TableRow>
              <TableRow>
                <PositionCell className={s.cell} content={'Grade'} jc={'space-between'}>
                  <Grade stars={el.grade} />
                </PositionCell>
              </TableRow>
              <TableRow>
                {isAuthor && (
                  <Actions
                    id={el.id}
                    isMobile
                    onDelete={() => onDeleteHandler(el.id)}
                    onEdit={() => onEditHandler(el.id)}
                    variant={VARIANT.ONLY_EDITS}
                  />
                )}
              </TableRow>
            </TableBody>
          </TableContainer>
        )
      })}
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
    </FlexContainer>
  )
}
