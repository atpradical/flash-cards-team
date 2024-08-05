export enum PATH {
  CARD_LEARN = '/deck/:deckId/learn',
  CHECK_EMAIL = '/check-email',
  CONFIRM_EMAIL = 'confirm-email/:token',
  DECK = '/deck/:deckId',
  DECK_LIST = '/deck-list',
  ERROR_404 = '/404',
  PROFILE = '/profile',
  PWD_RECOVERY = '/password-recovery',
  PWD_RESET = '/reset-password/:token',
  ROOT = '/',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
}
