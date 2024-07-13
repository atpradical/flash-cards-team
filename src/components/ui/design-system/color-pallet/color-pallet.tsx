import { ComponentPropsWithoutRef } from 'react'

import {
  ColorPallet,
  PalletCategory,
  PalletItem,
} from '@/components/ui/design-system/color-pallet/color-pallet.mock'
import { cn } from '@/components/ui/design-system/color-pallet/color-pallet.styles'
import { Card, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'

type ColorPalletProps = {
  colors: ColorPallet
}

export const ColorPalette = ({ colors }: ColorPalletProps) => {
  const category = Object.keys(colors)

  return (
    <Card className={cn.container}>
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
    </Card>
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
          <ColorBox color={el.color} />
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

type ColorBoxProps = ComponentPropsWithoutRef<'div'> & Omit<PalletItem, 'id'>

const ColorBox = ({ color, ...rest }: ColorBoxProps) => {
  return <div className={cn.box} style={{ backgroundColor: color }} {...rest} />
}
