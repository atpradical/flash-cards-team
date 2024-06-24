import type { Meta } from '@storybook/react'

import myImage from '@/assets/webp/react-logo.webp'
import { ASPECT_RATIO } from '@/common/enums/aspect-ratio'
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
      <AspectRatio ratio={ASPECT_RATIO.Standard} variant={'m'}>
        <img alt={'Image'} className={s.image} src={myImage} />
      </AspectRatio>
    )
  },
}

export const AspectRatioWide = {
  render: () => {
    return (
      <AspectRatio ratio={ASPECT_RATIO.Wide} variant={'s'}>
        <img alt={'Image'} className={s.image} src={myImage} />
      </AspectRatio>
    )
  },
}

export const AspectRatioUltrawide = {
  render: () => {
    return (
      <AspectRatio ratio={ASPECT_RATIO.UltraWide} variant={'l'}>
        <img alt={'Image'} className={s.image} src={myImage} />
      </AspectRatio>
    )
  },
}

export const AspectRatioExtraWide = {
  render: () => {
    return (
      <AspectRatio ratio={ASPECT_RATIO.ExtraWide} variant={'xl'}>
        <img alt={'Image'} className={s.image} src={myImage} />
      </AspectRatio>
    )
  },
}
