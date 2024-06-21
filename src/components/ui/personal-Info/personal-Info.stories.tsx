import { ComponentProps } from 'react'

import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { PersonalInfo } from './personal-Info'

const meta: Meta<typeof PersonalInfo> = {
  argTypes: {},
  component: PersonalInfo,
  tags: ['autodocs'],
  title: 'PersonalInfo',
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

type PersonalInfoWrapperProps = ComponentProps<typeof PersonalInfo>

const PersonalInfoWrapper = ({ ...props }: PersonalInfoWrapperProps) => {
  const avatarClick = action('buttonAvatar was invoked')
  // const nameClick = action('buttonName was invoked') //for tests
  // const logOutClick = action('buttonLogOut was invoked')

  return (
    <div>
      <div onClick={avatarClick}>
        <PersonalInfo {...props} />
      </div>
    </div>
  )
}

export const PersonalInfoBase: Story = {
  args: {
    name: 'Ivan',
    photoDesc: 'name',
    src: './src/assets/webp/avatar-default.webp',
  },
  render: args => <PersonalInfoWrapper {...args} />,
}
