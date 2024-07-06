import { ComponentPropsWithoutRef } from 'react'

import {
  ColorPallet,
  PalletCategory,
  PalletItem,
} from '@/components/ui/primitives/color-pallet/color-pallet.mock'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './color-pallet.module.scss'

import { Typography } from '../typography'

type ColorPalletProps = {
  colors: ColorPallet
}

export const ColorPalette = ({ colors }: ColorPalletProps) => {
  const category = Object.keys(colors)

  return (
    <div className={s.container}>
      {category.map((el, index) => {
        const key = el + index
        const category = el as PalletCategory
        const categoryColors = colors[el as PalletCategory]

        return (
          <FlexContainer gap={'20px'} key={key}>
            <Pallet category={category} categoryColors={categoryColors} />
          </FlexContainer>
        )
      })}
    </div>
  )
}

type PalletProps = {
  category: PalletCategory
  categoryColors: PalletItem[]
}

const Pallet = ({ category, categoryColors }: PalletProps) => {
  return (
    <FlexContainer>
      <Typography as={'h2'} className={s.title} variant={'h2'}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Typography>
      {categoryColors.map(el => (
        <FlexContainer fd={'column'} gap={'4px'} key={el.id}>
          <Box color={el.color} id={el.id} />
          <Typography className={s.text} style={{ color: el.color }} variant={'caption'}>
            {el.color}
          </Typography>
          <Typography className={s.text} variant={'caption'}>
            {el.id}
          </Typography>
        </FlexContainer>
      ))}
    </FlexContainer>
  )
}

type BoxProps = ComponentPropsWithoutRef<'div'> & PalletItem

const Box = ({ color, ...rest }: BoxProps) => {
  return <div className={clsx(s.box)} style={{ backgroundColor: color }} {...rest} />
}
