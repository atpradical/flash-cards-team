import type { Meta, StoryObj } from '@storybook/react'

import { ArrowBackOutline, Heart } from '@/assets/icons'
import { Button } from '@/components/ui/primitives'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'link', 'icon', 'danger'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Primitives/Button',
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>
export default meta

export const Primary: Story = {
  args: {
    children: 'Primary',
    onClick: action('Button click invoked'),
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    onClick: action('Button click invoked'),
    variant: 'secondary',
  },
}

export const Danger: Story = {
  args: {
    children: 'Danger',
    onClick: action('Button click invoked'),
    variant: 'danger',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Heart />
        Button with Icon
      </>
    ),
    onClick: action('Button click invoked'),
  },
}

export const IconButton: Story = {
  args: {
    children: <Heart />,
    onClick: action('Button click invoked'),
    variant: 'icon',
  },
}

export const BackButton: Story = {
  args: {
    as: 'a',
    children: (
      <>
        <ArrowBackOutline />
        Go Back
      </>
    ),
    href: 'https://google.com',
    onClick: action('Button click invoked'),
    target: '_blank',
    variant: 'link',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Button as Link',
    href: 'https://google.com',
    onClick: action('Button click invoked'),
    target: '_blank',
  },
}
