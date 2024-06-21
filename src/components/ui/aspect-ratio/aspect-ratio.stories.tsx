import type { Meta } from '@storybook/react'

import { Aspect_Ratio } from '@/common/enums/aspect-ratio'
import { AspectRatio } from '@/components/ui/aspect-ratio/aspect-ratio'

import s from './aspect-ratio.module.scss'

const meta = {
  component: AspectRatio,
  tags: ['autodocs'],
  title: 'Components/AspectRatio',
} satisfies Meta<typeof AspectRatio>

export default meta
const image = {
  alt: 'Image',
  src: 'src/assets/webp/react-logo.webp',
}

export const AspectRatioStandard = {
  render: () => {
    return (
      <AspectRatio size={Aspect_Ratio.Standard}>
        <img alt={image.alt} className={s.image} src={image.src} />
      </AspectRatio>
    )
  },
}

export const AspectRatioWide = {
  render: () => {
    return (
      <AspectRatio size={Aspect_Ratio.Wide}>
        <img alt={image.alt} className={s.image} src={image.src} />
      </AspectRatio>
    )
  },
}

export const AspectRatioUltrawide = {
  render: () => {
    return (
      <AspectRatio size={Aspect_Ratio.UltraWide}>
        <img alt={image.alt} className={s.image} src={image.src} />
      </AspectRatio>
    )
  },
}
