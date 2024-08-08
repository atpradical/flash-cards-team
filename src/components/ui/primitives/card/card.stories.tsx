import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/primitives/button'
import { Card } from '@/components/ui/primitives/card'
import { Typography } from '@/components/ui/primitives/typography'

const meta = {
  argTypes: {
    as: {
      control: { type: 'radio' },
      options: ['div', 'article', 'section', 'aside'],
    },
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Primitives/Card',
} satisfies Meta<typeof Card>

type Story = StoryObj<typeof meta>
export default meta

export const CardSample: Story = {
  args: {
    style: {
      height: '288px',
      width: '420px',
    },
  },
}

export const CardWithQuestion = () => {
  return (
    <Card style={{ width: '420px' }}>
      <Typography as={'h1'} variant={'h1'}>
        Learn &quot;Deck Name&quot;
      </Typography>
      <Typography variant={'subtitle1'}>
        Question: How &quot;This&quot; works in JavaScript?
      </Typography>
      <Typography style={{ marginBottom: '10px' }}>
        Количество попыток ответов на вопрос: 10
      </Typography>
      <Button fullWidth>Show Answer</Button>
    </Card>
  )
}
