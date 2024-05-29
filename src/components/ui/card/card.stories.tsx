import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/'
import { Typography } from '@/components/ui/typography'

const meta = {
  argTypes: {
    as: {
      control: { type: 'radio' },
      options: ['div', 'article', 'section', 'aside'],
    },
    style: {
      control: {
        fields: {
          height: {
            control: { type: 'text' },
          },
          width: {
            control: { type: 'text' },
          },
        },
        type: 'object',
      },
    },
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

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
      <Typography variant={'body2'}>Количество попыток ответов на вопрос: 10</Typography>
      <Button fullWidth>Show Answer</Button>
    </Card>
  )
}
