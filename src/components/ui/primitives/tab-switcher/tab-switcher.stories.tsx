import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { TabSwitcher as TabSwitcherComponent } from '@/components/ui/primitives/tab-switcher'
import { mockTabs1 } from '@/components/ui/primitives/tab-switcher/tab-switcher.mock'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: TabSwitcherComponent,
  tags: ['autodocs'],
  title: 'Primitives/TabSwitcher',
} satisfies Meta<typeof TabSwitcherComponent>

type Story = StoryObj<typeof meta>
export default meta

export const TabSwitcher: Story = {
  args: {
    defaultValue: 'tab-value-2',
    label: 'Tab Switcher',
    onTabChange: action('Action invoked'),
    tabs: mockTabs1,
  },
  render: args => {
    return (
      <MemoryRouter>
        <TabSwitcherComponent {...args} />
      </MemoryRouter>
    )
  },
}
