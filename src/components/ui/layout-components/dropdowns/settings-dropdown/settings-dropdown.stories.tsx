import type { Meta, StoryObj } from '@storybook/react'

import { SettingsDropdown as SettingsDropdownComponent } from '@/components/ui/layout-components'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: SettingsDropdownComponent,
  title: 'Layout Components/Dropdowns/SettingsDropdown',
} satisfies Meta<typeof SettingsDropdownComponent>

export default meta
type Story = StoryObj<typeof meta>

export const SettingsDropdown: Story = {
  args: {
    learnDeckPath: '',
    onDelete: action('onEdit action invoked!'),
    onEdit: action('onEdit action invoked!'),
  },
}
