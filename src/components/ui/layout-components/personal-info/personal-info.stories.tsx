import { Provider } from 'react-redux'

import { PersonalInfo as PersonalInfoComponent } from '@/components/ui/layout-components'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { store } from '@/services'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: PersonalInfoComponent,
  title: 'Layout Components/PersonalInfo',
} satisfies Meta<typeof PersonalInfoComponent>

export default meta

type Story = StoryObj<typeof meta>

export const PersonalInfo: Story = {
  args: {
    deleteAvatar: () => alert('Delete Avatar'),
    editName: () => alert('Edit Name'),
    logout: () => alert('Logout'),
    uploadAvatar: async (e: any) => alert(e),
    userData: mockUser,
  },
  render: args => (
    <Provider store={store}>
      <PersonalInfoComponent {...args} />
    </Provider>
  ),
}
