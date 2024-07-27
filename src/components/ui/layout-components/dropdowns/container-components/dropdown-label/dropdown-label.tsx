import { ComponentPropsWithoutRef } from 'react'

import { Avatar, Label, Separator, Typography } from '@/components/ui/primitives'

type Props = {
  email: string
  name: string
  noSep?: boolean
  photo: string
} & ComponentPropsWithoutRef<typeof Label>

export const DropdownLabel = (props: Props) => {
  const { email, name, noSep = true, photo, ...rest } = props

  return (
    <>
      <Label {...rest}>
        <Avatar name={name} size={'s'} src={photo} title={name} />
        <div>
          <Typography variant={'subtitle2'}>{name}</Typography>
          <Typography gray variant={'caption'}>
            {email}
          </Typography>
        </div>
      </Label>
      {noSep && <Separator />}
    </>
  )
}
