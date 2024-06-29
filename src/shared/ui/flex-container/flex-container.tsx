import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import s from './flex-container.module.scss'

type Props = {
  ai?: CSSProperties['alignItems']
  fd?: CSSProperties['flexDirection']
  fg?: CSSProperties['flexGrow']
  fw?: CSSProperties['flexWrap']
  gap?: CSSProperties['gap']
  jc?: CSSProperties['justifyContent']
  mt?: CSSProperties['marginTop']
  pd?: CSSProperties['padding']
} & ComponentPropsWithoutRef<'div'>

export const FlexContainer = ({
  ai = 'center',
  fd = 'row',
  fg = '0',
  fw = 'nowrap',
  gap,
  jc = 'flex-start',
  mt,
  pd,
  style,
  ...rest
}: Props) => {
  const containerStyles: CSSProperties = {
    alignItems: ai,
    flexDirection: fd,
    flexGrow: fg,
    flexWrap: fw,
    gap: gap,
    justifyContent: jc,
    marginTop: mt,
    padding: pd,
    ...style,
  }

  return <div className={s.container} style={containerStyles} {...rest} />
}
