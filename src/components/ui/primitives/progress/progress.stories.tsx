import { Progress as ProgressComponent } from '@/components/ui/primitives/progress'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: ProgressComponent,
  tags: ['autodocs'],
  title: 'Primitives/Progress',
} satisfies Meta<typeof ProgressComponent>

type Story = StoryObj<typeof meta>
export default meta

export const Progress: Story = {
  render: () => <ProgressComponent />,
}
