import type { Meta, StoryObj } from '@storybook/react'

import { CloseOutline, EyeOutline, SearchOutline } from '@/assets/components/svgIcons'

import { Input } from './input'

const meta = {
  argTypes: {
    helperText: { control: 'text' },
    icons: { control: 'object' },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['active', 'default', 'disabled', 'error', 'focus', 'hover'],
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
    icons: [{ icon: <EyeOutline />, type: 'eye' }],
  },
}

export const DefaultWitnIconSearchOutline: Story = {
  args: {
    icons: [{ icon: <SearchOutline />, type: 'search' }],
    label: '',
    placeholder: 'Input search',
  },
}

export const Active: Story = {
  args: {
    variant: 'active',
  },
}

export const ActiveWitnIconEyeOutline: Story = {
  args: {
    icons: [{ icon: <EyeOutline />, type: 'eye' }],
    variant: 'active',
  },
}

export const ActiveWitnIconSearchOutline: Story = {
  args: {
    icons: [
      { icon: <SearchOutline />, type: 'search' },
      { icon: <CloseOutline />, type: 'close' },
    ],
    label: '',
    variant: 'active',
  },
}

export const Error: Story = {
  args: {
    helperText: 'Error',
    label: 'Error',
    placeholder: 'Error',
    variant: 'error',
  },
}

export const ErrorWitnIconEyeOutline: Story = {
  args: {
    helperText: 'Error!',
    icons: [{ icon: <EyeOutline />, type: 'eye' }],
    label: 'Error',
    placeholder: 'Error',
    variant: 'error',
  },
}

export const ErrorWitnIconSearchOutline: Story = {
  args: {
    helperText: 'Error!',
    icons: [{ icon: <SearchOutline />, type: 'search' }],
    label: '',
    placeholder: 'Input search',
    variant: 'error',
  },
}

export const Hover: Story = {
  args: {
    variant: 'hover',
  },
}

export const HoverWitnIconEyeOutline: Story = {
  args: {
    icons: [{ icon: <EyeOutline />, type: 'eye' }],
    variant: 'hover',
  },
}

export const HoverWitnIconSearchOutline: Story = {
  args: {
    icons: [{ icon: <SearchOutline />, type: 'search' }],
    label: '',
    placeholder: 'Input search',
    variant: 'hover',
  },
}

export const Focus: Story = {
  args: {
    variant: 'focus',
  },
}

export const FocusWitnIconEyeOutline: Story = {
  args: {
    icons: [{ icon: <EyeOutline />, type: 'eye' }],
    variant: 'focus',
  },
}

export const FocusWitnIconSearchOutline: Story = {
  args: {
    icons: [{ icon: <SearchOutline />, type: 'search' }],
    label: '',
    placeholder: 'Input search',
    variant: 'focus',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'disabled',
  },
}

export const DisabledWitnIconEyeOutline: Story = {
  args: {
    icons: [{ icon: <EyeOutline />, type: 'eye' }],
    variant: 'disabled',
  },
}

export const DisabledWitnIconSearchOutline: Story = {
  args: {
    icons: [{ icon: <SearchOutline />, type: 'search' }],
    label: '',
    placeholder: 'Input search',
    variant: 'disabled',
  },
}
