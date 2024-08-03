import { ChangeEvent } from 'react'
import { Provider } from 'react-redux'

import { PersonalInfo as PersonalInfoComponent } from '@/components/ui/layout-components'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { store } from '@/services'
import { action } from '@storybook/addon-actions'
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
    deleteAvatar: action('Delete Avatar'),
    deleteUser: action('Delete user'),
    editName: action('Edit Name'),
    logout: action('Logout'),
    uploadAvatar: (e: ChangeEvent<HTMLInputElement>) => {
      action('upload avatar')(e)

      return Promise.resolve()
    },
    userData: mockUser,
  },
  render: args => (
    <Provider store={store}>
      <PersonalInfoComponent {...args} />
    </Provider>
  ),
}
