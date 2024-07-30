import type { Meta, StoryObj } from '@storybook/react'

import { IncubatorLogoSmall } from '@/assets/icons'

const meta = {
  argTypes: {},
  component: IncubatorLogoSmall,
  title: 'Design System/Incubator Logo Mobile',
} satisfies Meta<typeof IncubatorLogoSmall>

export default meta
type Story = StoryObj<typeof meta>

export const IncubatorLogoMobile: Story = {}
