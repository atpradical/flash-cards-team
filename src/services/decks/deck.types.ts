export type DeckAuthor = {
  id: string
  name: string
}

export type DeckItem = {
  isFavorite: boolean
  author: DeckAuthor
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover?: string
  created: string
  updated: string
  cardsCount: number
}

export type PaginationModel = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type ResponseDecksList = {
  items: DeckItem[]
  pagination: PaginationModel
}

export type GetDecksArgs = {
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: string // favoritedBy ?
}
