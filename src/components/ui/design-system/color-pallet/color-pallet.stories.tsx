import type { Meta, StoryObj } from '@storybook/react'

import { ColorPalette } from '@/components/ui/design-system'
import { colors } from '@/components/ui/design-system/color-pallet/color-pallet.mock'

const meta = {
  argTypes: {},
  component: ColorPalette,
  title: 'Design System/Color Pallet',
} satisfies Meta<typeof ColorPalette>

export default meta
type Story = StoryObj<typeof meta>

export const ColorPaletteExample: Story = {
  args: { colors: colors },
}
