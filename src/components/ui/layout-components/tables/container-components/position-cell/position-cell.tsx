import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Image, TableCell } from '@/components/ui/primitives'
import { RATIO, SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'

type Props = {
  content?: string
  entity?: string
  image?: string
} & ComponentPropsWithoutRef<typeof TableCell>

type PositionCellRef = ElementRef<typeof TableCell>

export const PositionCell = forwardRef<PositionCellRef, Props>(
  ({ children, content, entity, image, ...props }, ref) => {
    const currentScreenWidth = useCurrentScreenWidth()
    const breakpoint = SCREEN_SIZE.TABLET
    const isTabletScreen = currentScreenWidth <= breakpoint

    return (
      <TableCell {...props} ref={ref}>
        <FlexContainer ai={'center'} fw={isTabletScreen ? 'wrap' : 'nowrap'} gap={'10px'}>
          {image && <Image alt={`${entity}'s image`} ratio={RATIO.S} src={image} variant={'s'} />}
          {content} {children}
        </FlexContainer>
      </TableCell>
    )
  }
)
