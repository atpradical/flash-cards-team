import clsx from 'clsx'

import s from './personal-info.module.scss'

export const cn = {
  accent: clsx(s.icon, s.accent),
  avatar: s.avatar,
  bottom: s.bottom,
  // checked: clsx(s.checked, s.icon),
  checked: s.checked,
  container: s.container,
  delete: s.delete,
  edit: s.edit,
  hint: s.hint,
  icon: s.icon,
  title: s.title,
  verifyButton: s.verifyButton,
  verifyEmail: s.verifyEmail,
  verifyReminder: s.verifyReminder,
  wrapper: s.wrapper,
}
