import type { Meta, StoryObj } from '@storybook/react'

import { Iconography as IconographyComponent } from '@/components/ui/design-system'
import { iconList } from '@/components/ui/design-system/iconography/iconography.mock'

const meta = {
  argTypes: {},
  component: IconographyComponent,
  title: 'Design System/Iconography',
} satisfies Meta<typeof IconographyComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Iconography: Story = {
  args: { icons: iconList },
}
