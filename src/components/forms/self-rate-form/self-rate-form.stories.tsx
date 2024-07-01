import { SelfRateForm } from '@/components/forms/self-rate-form/self-rate-form'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: SelfRateForm,
  title: 'Forms/SelfRateForm',
} satisfies Meta<typeof SelfRateForm>

export default meta
type Story = StoryObj<typeof meta>

export const SelfRateFormBase: Story = {
  args: {
    onSubmit: action('onSubmit action invoked!'),
  },
}
