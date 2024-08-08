import type { Meta, StoryObj } from '@storybook/react'

import { IncubatorLogo as IncubatorLogoComponent } from '@/assets/icons'

const meta = {
  argTypes: {},
  component: IncubatorLogoComponent,
  title: 'Design System/Incubator Logo',
} satisfies Meta<typeof IncubatorLogoComponent>

type Story = StoryObj<typeof meta>
export default meta

export const IncubatorLogo: Story = {}
