import { SelfRateForm as SelfRateFormComponent } from '@/components/forms/self-rate-form/self-rate-form'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: SelfRateFormComponent,
  title: 'Forms/SelfRateForm',
} satisfies Meta<typeof SelfRateFormComponent>

export default meta
type Story = StoryObj<typeof meta>

export const SelfRateForm: Story = {
  args: {
    cardId: 'test-cardId',
    onNextQuestion: action('onSubmit action invoked!'),
  },
}
