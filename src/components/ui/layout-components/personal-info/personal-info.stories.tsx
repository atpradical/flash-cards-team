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
  title: 'Layout Components/Personal Info',
} satisfies Meta<typeof PersonalInfoComponent>

type Story = StoryObj<typeof meta>
export default meta

export const PersonalInfo: Story = {
  args: {
    deleteAvatar: action('Delete avatar action invoked!'),
    deleteUser: action('Delete user action invoked!'),
    editName: action('Edit Name action invoked!'),
    logout: action('Logout action invoked!'),
    uploadAvatar: (e: ChangeEvent<HTMLInputElement>) => {
      action('upload avatar action invoked!')(e)

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
