import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher, TabType } from '@/components/ui/tabSwitcher/tabSwitcher'
import { action } from '@storybook/addon-actions'

const mockTabs1: TabType[] = [
  { title: 'Tab title 1', value: 'tab-value-1' },
  { title: 'Tab title 2', value: 'tab-value-2' },
  { title: 'Tab title 3', value: 'tab-value-3' },
]

const mockTabs2: TabType[] = [
  { disabled: true, title: 'Tab title 1', value: 'tab-value-1' },
  { disabled: true, title: 'Tab title 2', value: 'tab-value-2' },
  { title: 'Tab title 3', value: 'tab-value-3' },
  { title: 'Tab title 4', value: 'tab-value-4' },
]
const mockTabs3: TabType[] = [
  { disabled: true, title: 'Tab title 1', value: 'tab-value-1' },
  { disabled: true, title: 'Tab title 2', value: 'tab-value-2' },
  { disabled: true, title: 'Tab title 3', value: 'tab-value-3' },
  { disabled: true, title: 'Tab title 4', value: 'tab-value-4' },
]

const meta = {
  argTypes: {},
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const TabSwitcherWithLabel: Story = {
  args: {
    label: 'Tab Switcher Label',
    onValueChange: action('Mock action invoked'),
    tabs: mockTabs1,
  },
}
export const BaseTabSwitcher: Story = {
  args: {
    onValueChange: action('Mock action invoked'),
    tabs: mockTabs1,
  },
}

export const TabSwitcherWithDefaultValue: Story = {
  args: {
    defaultValue: mockTabs1[1].value,
    onValueChange: action('Mock action invoked'),
    tabs: mockTabs1,
  },
}

export const TabSwitcherWithSeveralDisabledTabs: Story = {
  args: {
    onValueChange: action('Mock action invoked'),
    tabs: mockTabs2,
  },
}
export const TabSwitcherAllDisabledTabs: Story = {
  args: {
    onValueChange: action('Mock action invoked'),
    tabs: mockTabs3,
  },
}
