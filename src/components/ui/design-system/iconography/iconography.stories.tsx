import type { Meta, StoryObj } from '@storybook/react'

import { Iconography } from '@/components/ui/design-system'

const meta = {
  argTypes: {},
  component: Iconography,
  title: 'Design System/Iconography',
} satisfies Meta<typeof Iconography>

export default meta
type Story = StoryObj<typeof meta>

export const IconographyExample: Story = {}
