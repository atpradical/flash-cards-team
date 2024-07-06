import { ComponentPropsWithoutRef } from 'react'

import {
  ColorPallet,
  PalletCategory,
  PalletItem,
} from '@/components/ui/design-system/color-pallet/color-pallet.mock'
import { cn } from '@/components/ui/design-system/color-pallet/color-pallet.styles'
import { Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'

type ColorPalletProps = {
  colors: ColorPallet
}

export const ColorPalette = ({ colors }: ColorPalletProps) => {
  const category = Object.keys(colors)

  return (
    <div className={cn.container}>
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
  const title = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <FlexContainer>
      <Typography as={'h2'} className={cn.title} variant={'h2'}>
        {title}
      </Typography>
      {categoryColors.map(el => (
        <FlexContainer fd={'column'} gap={'4px'} key={el.id}>
          <Box color={el.color} id={el.id} />
          <Typography className={cn.text} style={{ color: el.color }} variant={'caption'}>
            {el.color}
          </Typography>
          <Typography className={cn.text} variant={'caption'}>
            {el.id}
          </Typography>
        </FlexContainer>
      ))}
    </FlexContainer>
  )
}

type BoxProps = ComponentPropsWithoutRef<'div'> & PalletItem

const Box = ({ color, ...rest }: BoxProps) => {
  return <div className={cn.box} style={{ backgroundColor: color }} {...rest} />
}
