import clsx from 'clsx'

import s from './personal-info.module.scss'

export const cn = {
  avatar: s.avatar,
  bottom: s.bottom,
  container: s.container,
  deleteAvatar: clsx(s.avatarButton, s.deleteAvatar),
  editAvatar: clsx(s.avatarButton, s.editAvatar),
  hint: s.hint,
  icon: s.icon,
  title: s.title,
  wrapper: s.wrapper,
}
