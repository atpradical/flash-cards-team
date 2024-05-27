import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './typography'

const mocText = 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'

const meta = {
  argTypes: {
    as: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'body1',
          'body2',
          'subtitle1',
          'subtitle2',
          'caption',
          'overline',
          'link1',
          'link2',
        ],
      },
    },
    className: {
      control: { type: 'text' },
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    as: 'h1',
    children: mocText,
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    as: 'h2',
    children: mocText,
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    as: 'h3',
    children: mocText,
    variant: 'h3',
  },
}

export const H4: Story = {
  args: {
    as: 'h4',
    children: mocText,
    variant: 'h4',
  },
}

export const Body1: Story = {
  args: {
    children: mocText,
    variant: 'body1',
  },
}

export const Body2: Story = {
  args: {
    children: mocText,
    variant: 'body2',
  },
}

export const Subtitle1: Story = {
  args: {
    children: mocText,
    variant: 'subtitle1',
  },
}

export const Subtitle2: Story = {
  args: {
    children: mocText,
    variant: 'subtitle2',
  },
}

export const Caption: Story = {
  args: {
    children: mocText,
    variant: 'caption',
  },
}

export const Overline: Story = {
  args: {
    children: mocText,
    variant: 'overline',
  },
}

export const Link1: Story = {
  args: {
    as: 'a',
    href: '#',
    children: mocText,
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    as: 'a',
    href: '#',
    children: mocText,
    variant: 'error',
  },
}

export const TypographyError: Story = {
  args: {
    children: mocText,
    variant: 'link2',
  },
}
