import { ReactNode } from 'react'

import clsx from 'clsx'

import s from './inputIconButton.module.scss'

type Props = {
  className?: string
  icon: ReactNode
  onClick?: () => void
  style?: React.CSSProperties
  type?: 'button' | 'reset' | 'submit'
}

export const IconButton = (props: Props) => {
  const { className, icon, onClick, style, type = 'button' } = props

  return (
    <button className={clsx(s.icon, className)} onClick={onClick} style={style} type={type}>
      {icon}
    </button>
  )
}
