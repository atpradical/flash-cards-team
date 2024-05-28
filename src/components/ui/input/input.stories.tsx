import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'
import { EyeOutline, SearchOutline } from '@/assets/components/svgIcons'

const meta = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['active', 'default', 'disabled', 'error', 'focus', 'hover'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'top'],
    },
    icons: {
      control: false,
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const DefaultWitnIconEyeOutline: Story = {
  args: {
    icons: [{ type: 'eye', icon: <EyeOutline /> }],
  },
}
export const DefaultWitnIconSearchOutline: Story = {
  args: {
    icons: [{ type: 'search', icon: <SearchOutline /> }],
  },
}

export const Active: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter here...',
    variant: 'active',
    size: 'medium',
    labelPosition: 'top',
  },
}

export const Error: Story = {
  args: {
    label: 'Error',
    placeholder: 'Error',
    helperText: 'Error',
    variant: 'error',
    size: 'medium',
  },
}

export const Hover: Story = {
  args: {
    variant: 'hover',
    size: 'medium',
  },
}

export const Focus: Story = {
  args: {
    variant: 'focus',
  },
}
