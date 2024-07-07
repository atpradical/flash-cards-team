import type { Meta, StoryObj } from '@storybook/react'

import { ArrowBackOutline, Heart } from '@/assets/icons'
import { Button } from '@/components/ui/primitives'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    onClick: action('action on button click invoked'),
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    onClick: action('action on button click invoked'),
    variant: 'secondary',
  },
}

export const ButtonWithIcon: Story = {
  args: {
    children: (
      <>
        <Heart />
        Button with Icon
      </>
    ),
    disabled: false,
    onClick: action('action on button click invoked'),
    variant: 'primary',
  },
}

export const Icon: Story = {
  args: {
    children: <Heart />,
    disabled: false,
    onClick: action('action on button click invoked'),
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
    disabled: false,
    href: 'https://google.com',
    onClick: action('action on button click invoked'),
    target: '_blank',
    variant: 'link',
  },
}

export const ButtonAsLink: Story = {
  args: {
    as: 'a',
    children: 'Button as Link',
    href: 'https://google.com',
    onClick: action('action on button click invoked'),
    target: '_blank',
  },
}
