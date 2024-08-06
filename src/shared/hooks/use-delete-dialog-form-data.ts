import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

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

  const cancelFormHandler = useCallback(() => {
    onOpenChange(false)
  }, [onOpenChange])

  const successRequestHandler = useCallback(() => {
    cancelFormHandler()
    toast.success(`${entity} successfully deleted`)
  }, [entity, cancelFormHandler])

  const formHandler = handleSubmit(async () => {
    if (entity === DIALOG_ENTITY.DECK) {
      await deleteDeck({ id: entityId }).unwrap()
      successRequestHandler()
      if (deckId === entityId) {
        // todo: need review check
        return (() => navigate(-1))()
      }
    }
    if (entity === DIALOG_ENTITY.CARD) {
      await deleteCard({ id: entityId }).unwrap()
      successRequestHandler()
    }
  })

  const title = `Delete ${entity}`
  const isLoad = combineLoadingStates(isLoadingDeleteCard, isLoadingDeleteDeck)

  return {
    cancelFormHandler,
    formHandler,
    isLoad,
    title,
  }
}
