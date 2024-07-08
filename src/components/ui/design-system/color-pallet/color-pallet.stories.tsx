import type { Meta, StoryObj } from '@storybook/react'

import { ColorPalette as ColorPaletteComponent } from '@/components/ui/design-system'
import { colors } from '@/components/ui/design-system/color-pallet/color-pallet.mock'

const meta = {
  argTypes: {},
  component: ColorPaletteComponent,
  title: 'Design System/Colors',
} satisfies Meta<typeof ColorPaletteComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Colors: Story = {
  args: { colors: colors },
}
