import type { Meta, StoryObj } from '@storybook/react'

import { IncubatorLogo as IncubatorLogoComponent } from '@/assets/icons'

const meta = {
  argTypes: {},
  component: IncubatorLogoComponent,
  title: 'Design System/Incubator Logo',
} satisfies Meta<typeof IncubatorLogoComponent>

export default meta
type Story = StoryObj<typeof meta>

export const IncubatorLogo: Story = {}
