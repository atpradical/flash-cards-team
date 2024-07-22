import type { Meta } from '@storybook/react'

import {
  EditOutline,
  LogOut,
  MoreVerticalOutline,
  PersonOutline,
  PlayCircleOutline,
  TrashOutline,
} from '@/assets/icons'
import { Avatar, Label, Typography } from '@/components/ui/primitives'
import {
  Arrow,
  Content,
  Item,
  Root,
  Separator,
  Trigger,
} from '@/components/ui/primitives/dropdown/dropdown'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'

const meta = {
  component: Root,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Root>

export default meta

export const DropdownWithUserAvatar = {
  render: () => {
    return (
      <Root>
        <Trigger style={{ cursor: 'pointer', display: 'flex' }}>
          <Avatar name={mockUser.name} size={'s'} src={mockUser.avatar} />
        </Trigger>
        <Content style={{ minWidth: '218px' }}>
          <Arrow />
          <Label>
            <Avatar name={mockUser.name} size={'s'} src={mockUser.avatar} />
            <div>
              <Typography
                style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
                variant={'subtitle2'}
              >
                {mockUser.name}
              </Typography>
              <Typography gray variant={'caption'}>
                {mockUser.email}
              </Typography>
            </div>
          </Label>
          <Separator />
          <Item>
            <Typography
              style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
              variant={'caption'}
            >
              <PersonOutline style={{ width: '16px' }} />
              My Profile
            </Typography>
          </Item>
          <Separator />
          <Item>
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

export const DropdownWithSettings = {
  render: () => {
    return (
      <Root>
        <Trigger asChild style={{ cursor: 'pointer', display: 'flex' }}>
          <MoreVerticalOutline />
        </Trigger>
        <Content>
          <Arrow />
          <Item>
            <Typography
              style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
              variant={'caption'}
            >
              <PlayCircleOutline style={{ width: '16px' }} />
              Learn
            </Typography>
          </Item>
          <Separator />
          <Item>
            <Typography
              style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
              variant={'caption'}
            >
              <EditOutline style={{ width: '16px' }} />
              Edit
            </Typography>
          </Item>
          <Separator />
          <Item>
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
