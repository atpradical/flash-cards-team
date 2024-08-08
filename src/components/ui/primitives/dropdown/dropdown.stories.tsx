import type { Meta, StoryObj } from '@storybook/react'

import {
  EditOutline,
  LogOut,
  MoreVerticalOutline,
  PersonOutline,
  PlayCircleOutline,
  TrashOutline,
} from '@/assets/icons'
import { Avatar, Label, Typography } from '@/components/ui/primitives'
import { Arrow, Content, Item, Root, Separator, Trigger } from '@/components/ui/primitives/dropdown'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { action } from '@storybook/addon-actions'

const meta = {
  component: Root,
  tags: ['autodocs'],
  title: 'Primitives/Dropdown',
} satisfies Meta<typeof Root>

type Story = StoryObj<typeof meta>
export default meta

const { avatar, email, name } = mockUser

export const WithUserAvatar: Story = {
  render: () => {
    return (
      <Root>
        <Trigger style={{ cursor: 'pointer', display: 'flex' }}>
          <Avatar name={name} size={'s'} src={avatar ?? ''} />
        </Trigger>
        <Content style={{ minWidth: '218px' }}>
          <Arrow />
          <Label>
            <Avatar name={name} size={'s'} src={avatar ?? ''} />
            <div>
              <Typography
                style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
                variant={'subtitle2'}
              >
                {name}
              </Typography>
              <Typography gray variant={'caption'}>
                {email}
              </Typography>
            </div>
          </Label>
          <Separator />
          <Item onClick={action('MyProfile invoked')}>
            <Typography
              style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
              variant={'caption'}
            >
              <PersonOutline style={{ width: '16px' }} />
              My Profile
            </Typography>
          </Item>
          <Separator />
          <Item onClick={action('SignOut invoked')}>
            <Typography
              style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
              variant={'caption'}
            >
              <LogOut style={{ width: '16px' }} />
              Sign Out
            </Typography>
          </Item>
        </Content>
      </Root>
    )
  },
}

export const WithSettings = {
  render: () => {
    return (
      <Root>
        <Trigger asChild style={{ cursor: 'pointer', display: 'flex' }}>
          <MoreVerticalOutline />
        </Trigger>
        <Content>
          <Arrow />
          <Item onClick={action('Learn invoked')}>
            <Typography
              style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
              variant={'caption'}
            >
              <PlayCircleOutline style={{ width: '16px' }} />
              Learn
            </Typography>
          </Item>
          <Separator />
          <Item onClick={action('Edit invoked')}>
            <Typography
              style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
              variant={'caption'}
            >
              <EditOutline style={{ width: '16px' }} />
              Edit
            </Typography>
          </Item>
          <Separator />
          <Item onClick={action('Delete invoked')}>
            <Typography
              style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
              variant={'caption'}
            >
              <TrashOutline style={{ width: '16px' }} />
              Delete
            </Typography>
          </Item>
        </Content>
      </Root>
    )
  },
}
