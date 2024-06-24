import type { Meta } from '@storybook/react'

import myImage from '@/assets/webp/react-logo.webp'
import { Aspect_Ratio } from '@/common/enums/aspect-ratio'
import { AspectRatio } from '@/components/ui/aspect-ratio/aspect-ratio'

import s from './aspect-ratio.module.scss'

const meta = {
  component: AspectRatio,
  tags: ['autodocs'],
  title: 'Components/AspectRatio',
} satisfies Meta<typeof AspectRatio>

export default meta

export const AspectRatioStandard = {
  render: () => {
    return (
      <AspectRatio ratio={Aspect_Ratio.Standard} width={'M'}>
        <img alt={'Image'} className={s.image} src={myImage} />
      </AspectRatio>
    )
  },
}

export const AspectRatioWide = {
  render: () => {
    return (
      <AspectRatio ratio={Aspect_Ratio.Wide} width={'S'}>
        <img alt={'Image'} className={s.image} src={myImage} />
      </AspectRatio>
    )
  },
}

export const AspectRatioUltrawide = {
  render: () => {
    return (
      <AspectRatio ratio={Aspect_Ratio.UltraWide} width={'L'}>
        <img alt={'Image'} className={s.image} src={myImage} />
      </AspectRatio>
    )
  },
}
