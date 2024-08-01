import { UpdateCardArgs } from '@/services'

export function createCardsFormData({
  answer,
  answerImg,
  question,
  questionImg,
}: Partial<UpdateCardArgs>): FormData {
  const formData = new FormData()

  if (answer) {
    formData.append('answer', answer)
  }
  if (answerImg) {
    formData.append('answerImg', answerImg)
  } else if (answerImg === null) {
    formData.append('answerImg', '')
  }
  if (question) {
    formData.append('question', question)
  }
  if (questionImg) {
    formData.append('questionImg', questionImg)
  } else if (questionImg === null) {
    formData.append('questionImg', '')
  }

  return formData
}
