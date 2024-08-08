import type { Meta, StoryObj } from '@storybook/react'

import myImage from '@/assets/webp/dummy-cover.webp'
import { Image } from '@/components/ui/primitives/image/image'
import { RATIO } from '@/shared/enums'

const meta = {
  component: Image,
  tags: ['autodocs'],
  title: 'Primitives/Image',
} satisfies Meta<typeof Image>

type Story = StoryObj<typeof meta>
export default meta

const commonArgs = {
  alt: 'Image',
  src: myImage,
}

export const ImageS: Story = {
  args: {
    ...commonArgs,
    ratio: RATIO.S,
    variant: 's',
  },
}

export const ImageM: Story = {
  args: {
    ...commonArgs,
    ratio: RATIO.M,
    variant: 'm',
  },
}

export const ImageL: Story = {
  args: {
    ...commonArgs,
    ratio: RATIO.L,
    variant: 'l',
  },
}

export const ImageXL: Story = {
  args: {
    ...commonArgs,
    ratio: RATIO.XL,
    variant: 'xl',
  },
}
