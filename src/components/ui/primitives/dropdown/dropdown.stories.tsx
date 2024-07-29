import type { Meta } from '@storybook/react'

import { LogOut, PersonOutline } from '@/assets/icons'
import {
  Arrow,
  Avatar,
  Content,
  Item,
  Label,
  Root,
  Separator,
  Trigger,
  Typography,
} from '@/components/ui/primitives'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'

const meta = {
  component: Root,
  tags: ['autodocs'],
  title: 'Primitives/Dropdown',
} satisfies Meta<typeof Root>

export default meta

export const Dropdown = {
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
