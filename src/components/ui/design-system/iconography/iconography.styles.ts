import clsx from 'clsx'

import s from './iconography.module.scss'

export const cn = {
  box: s.box,
  container: s.container,
  heart: clsx(s.icon, s.heart),
  icon: s.icon,
  star: clsx(s.icon, s.star),
  title: s.title,
  wrapper: s.wrapper,
}
