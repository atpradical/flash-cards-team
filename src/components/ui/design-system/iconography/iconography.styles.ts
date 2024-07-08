import clsx from 'clsx'

import s from './iconography.module.scss'

export const cn = {
  box: clsx(s.box),
  container: clsx(s.container),
  heart: clsx(s.icon, s.heart),
  icon: clsx(s.icon),
  star: clsx(s.icon, s.star),
  title: clsx(s.title),
  wrapper: clsx(s.wrapper),
}
