import type { Meta, StoryObj } from '@storybook/react'

import {
  mockTabs1,
  mockTabs2,
  mockTabs3,
} from '@/components/ui/primitives/tab-switcher/tab-switcher.mock'
import { action } from '@storybook/addon-actions'

import { TabSwitcher } from './tab-switcher'

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
    onFilterTabChange: action('Mock action invoked'),
    tabs: mockTabs1,
  },
}
export const BaseTabSwitcher: Story = {
  args: {
    onFilterTabChange: action('Mock action invoked'),
    tabs: mockTabs1,
  },
}

export const TabSwitcherWithDefaultValue: Story = {
  args: {
    defaultValue: mockTabs1[1].value,
    onFilterTabChange: action('Mock action invoked'),
    tabs: mockTabs1,
  },
}

export const TabSwitcherWithSeveralDisabledTabs: Story = {
  args: {
    onFilterTabChange: action('Mock action invoked'),
    tabs: mockTabs2,
  },
}
export const TabSwitcherAllDisabledTabs: Story = {
  args: {
    onFilterTabChange: action('Mock action invoked'),
    tabs: mockTabs3,
  },
}
