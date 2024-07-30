import type { Meta, StoryObj } from '@storybook/react'

import { Progress as ProgressComponent } from './progress'

const meta = {
  argTypes: {},
  component: ProgressComponent,
  tags: ['autodocs'],
  title: 'Primitives/Progress',
} satisfies Meta<typeof ProgressComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Progress: Story = {}
