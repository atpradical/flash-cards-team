import clsx from 'clsx'

import s from './actions.module.scss'

export const cn = {
  action: s.action,
  button: s.button,
  buttonMobile: s.buttonMobile,
  favorite: clsx(s.action, s.favorite),
  favoriteMobile: clsx(s.mobile, s.favorite),
  mobile: s.mobile,
  tableCell: s.tableCell,
}
