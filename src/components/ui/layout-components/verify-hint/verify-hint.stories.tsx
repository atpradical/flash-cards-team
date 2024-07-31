import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { VerifyHint as VerifyHintComponent } from './verify-hint'

const meta = {
  argTypes: {},
  component: VerifyHintComponent,
  title: 'Layout Components/VerifyHint',
} satisfies Meta<typeof VerifyHintComponent>

export default meta
type Story = StoryObj<typeof meta>

export const VerifyHint: Story = {
  args: {
    verify: action('Verify button was invoked'),
  },
}
