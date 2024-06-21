// import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
//
// import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'
//
// const RATIO_WIDE = 118 / 48
// const RATIO_STANDARD = 170 / 107
//
// type Wide = typeof RATIO_WIDE
// type Standard = typeof RATIO_STANDARD
// type AspectRatioProps = {
//   size: Standard | Wide
// } & ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
// type AspectRadioRef = ElementRef<typeof AspectRatioPrimitive.Root>
// const AspectRatio = forwardRef<AspectRadioRef, AspectRatioProps>(
//   ({ children, size, ...rest }, ref) => {
//     return (
//       <AspectRatioPrimitive.Root ratio={118 / 48} ref={ref} {...rest}>
//         {children}
//       </AspectRatioPrimitive.Root>
//     )
//   }
// )
//
// export { AspectRatio }

import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }
