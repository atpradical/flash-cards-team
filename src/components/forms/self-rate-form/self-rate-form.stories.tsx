import { SelfRateForm as SelfRateFormComponent } from '@/components/forms'
import { Card } from '@/components/ui/primitives'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: SelfRateFormComponent,
  title: 'Forms/Self Rate Form',
} satisfies Meta<typeof SelfRateFormComponent>

export default meta
type Story = StoryObj<typeof meta>

export const SelfRateForm: Story = {
  args: {
    cardId: 'test-cardId',
    onNextQuestion: action('onSubmit action invoked!'),
  },
  render: args => {
    return (
      <Card style={{ width: '500px' }}>
        <SelfRateFormComponent {...args} />
      </Card>
    )
  },
}
