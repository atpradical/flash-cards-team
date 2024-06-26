import { useEffect, useState } from 'react'

import { Progress } from '@/components/ui/progress/progress'
import { Meta } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Progress,
  tags: ['autodocs'],
  title: 'Components/Progress',
} satisfies Meta<typeof Progress>

export default meta

export const ProgressBase = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500)

    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} />
}
