export type PaginationModel = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type DeckAuthor = {
  id: string
  name: string
}

export type Deck = {
  author: DeckAuthor
  cardsCount: number
  cover?: string
  created: string
  id: string
  isFavorite: boolean
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type DecksListResponse = {
  items: Deck[]
  pagination: PaginationModel
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}
