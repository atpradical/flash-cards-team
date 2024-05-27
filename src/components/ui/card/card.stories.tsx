import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
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
    as: 'div',
    style: {
      height: '288px',
      width: '420px',
    },
  },
}

export const CardExample = () => {
  return (
    <Card as={'div'}>
      <Typography as={'h1'} variant={'h1'}>
        Learn “Deck Name”
      </Typography>
      <Typography as={'p'} variant={'subtitle1'}>
        Question: How &quot;This&quot; works in JavaScript?
      </Typography>
      <Typography as={'p'} variant={'body2'}>
        Количество попыток ответов на вопрос: 10
      </Typography>
      <Button fullWidth>Show Answer</Button>
    </Card>
  )
}
