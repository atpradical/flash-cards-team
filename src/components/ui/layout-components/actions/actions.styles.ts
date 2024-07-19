import clsx from 'clsx'

import s from './actions.module.scss'

export const cn = {
  action: s.action,
  button: s.button,
  favorite: clsx(s.action, s.favorite),
}
