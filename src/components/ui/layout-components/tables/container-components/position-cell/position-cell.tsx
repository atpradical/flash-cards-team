import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Image, TableCell } from '@/components/ui/primitives'
import { RATIO } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

type Props = {
  content?: string
  entity?: string
  image?: string
} & ComponentPropsWithoutRef<typeof TableCell>

type PositionCellRef = ElementRef<typeof TableCell>

export const PositionCell = forwardRef<PositionCellRef, Props>(
  ({ children, content, entity, image, ...props }, ref) => {
    return (
      <TableCell {...props} ref={ref}>
        <FlexContainer gap={'10px'}>
          {image && <Image alt={`${entity}'s image`} ratio={RATIO.S} src={image} variant={'s'} />}
          {content} {children}
        </FlexContainer>
      </TableCell>
    )
  }
)
