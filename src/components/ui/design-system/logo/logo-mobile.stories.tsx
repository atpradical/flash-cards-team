import type { Meta, StoryObj } from '@storybook/react'

import { IncubatorLogoSmall as IncubatorLogoSmallComponent } from '@/assets/icons'

const meta = {
  argTypes: {},
  component: IncubatorLogoSmallComponent,
  title: 'Design System/Incubator Logo For Mobile',
} satisfies Meta<typeof IncubatorLogoSmallComponent>

type Story = StoryObj<typeof meta>
export default meta

export const IncubatorLogoForMobile: Story = {}
