import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { VerifyHint as VerifyHintComponent } from './verify-hint'

const meta = {
  argTypes: {},
  component: VerifyHintComponent,
  title: 'Layout Components/Verify Hint',
} satisfies Meta<typeof VerifyHintComponent>

type Story = StoryObj<typeof meta>
export default meta

export const VerifyHint: Story = {
  args: {
    verify: action('Verify button was invoked'),
  },
  render: args => {
    return (
      <div style={{ width: '280px' }}>
        <VerifyHintComponent {...args} />
      </div>
    )
  },
}
