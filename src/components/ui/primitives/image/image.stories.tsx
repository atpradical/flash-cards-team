import type { Meta } from '@storybook/react'

import myImage from '@/assets/webp/react-logo.webp'
import { Image } from '@/components/ui/primitives/image/image'
import { RATIO } from '@/shared/enums/ratio'

const meta = {
  component: Image,
  tags: ['autodocs'],
  title: 'Components/Image',
} satisfies Meta<typeof Image>

export default meta

export const ImageS = {
  render: () => {
    return <Image alt={'Image'} ratio={RATIO.S} src={myImage} variant={'s'} />
  },
}

export const ImageM = {
  render: () => {
    return <Image alt={'Image'} ratio={RATIO.M} src={myImage} variant={'m'} />
  },
}

export const ImageL = {
  render: () => {
    return <Image alt={'Image'} ratio={RATIO.L} src={myImage} variant={'l'} />
  },
}

export const ImageXL = {
  render: () => {
    return <Image alt={'Image'} ratio={RATIO.XL} src={myImage} variant={'xl'} />
  },
}
