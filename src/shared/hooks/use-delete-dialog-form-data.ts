import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { DeleteDialogFormValues, DeleteFormScheme } from '@/components/forms'
import { useDeleteCardMutation, useDeleteDeckMutation } from '@/services'
import { DIALOG_ENTITY } from '@/shared/enums'
import { combineLoadingStates } from '@/shared/utils'
import { zodResolver } from '@hookform/resolvers/zod'

type UseDeleteDialogFormData = {
  entity: DIALOG_ENTITY
  entityId: string
  onOpenChange: (open: boolean) => void
}
export const useDeleteDialogFormData = ({
  entity,
  entityId,
  onOpenChange,
}: UseDeleteDialogFormData) => {
  const { deckId } = useParams()
  const navigate = useNavigate()

  const [deleteCard, { isLoading: isLoadingDeleteCard }] = useDeleteCardMutation()
  const [deleteDeck, { isLoading: isLoadingDeleteDeck }] = useDeleteDeckMutation()

  const { handleSubmit } = useForm<DeleteDialogFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(DeleteFormScheme),
  })

  const formHandler = handleSubmit(() => {
    if (entity === DIALOG_ENTITY.CARD) {
      deleteCard({ id: entityId }).then(() => cancelFormHandler())
    }
    if (entity === DIALOG_ENTITY.DECK) {
      deleteDeck({ id: entityId }).then(() => {
        cancelFormHandler()

        if (deckId === entityId) {
          navigate(-1)
        }
      })
    }
  })

  const cancelFormHandler = () => {
    onOpenChange(false)
  }

  const title = `Delete ${entity}`
  const isLoad = combineLoadingStates(isLoadingDeleteCard, isLoadingDeleteDeck)

  return {
    cancelFormHandler,
    formHandler,
    isLoad,
    title,
  }
}
