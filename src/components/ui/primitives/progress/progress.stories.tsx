import { Progress } from '@/components/ui/primitives/progress'
import { Meta } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Progress,
  tags: ['autodocs'],
  title: 'Components/Progress',
} satisfies Meta<typeof Progress>

export default meta

export const ProgressBase = () => {
  return <Progress />
}
