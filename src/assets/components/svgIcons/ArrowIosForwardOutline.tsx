import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgArrowIosForwardOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="arrow-ios-forward-outline_svg__a">
        <path fill="currentColor" fillOpacity={0} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h24v24H0z" />
    <g clipPath="url(#arrow-ios-forward-outline_svg__a)">
      <path
        fill="currentColor"
        d="M10 19c-.24 0-.47-.09-.64-.23a.9.9 0 0 1-.25-.31.9.9 0 0 1-.11-.37 1.02 1.02 0 0 1 .22-.73L13.71 12 9.39 6.63a1 1 0 0 1-.19-.35c-.03-.13-.05-.26-.03-.39a.94.94 0 0 1 .37-.67c.1-.1.22-.16.35-.21.13-.04.27-.05.41-.04.13.02.27.06.39.13.12.06.22.15.31.27l4.83 6c.14.17.22.4.22.63s-.08.46-.22.64l-5 6c-.11.12-.23.21-.38.27-.14.07-.3.09-.45.09"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgArrowIosForwardOutline)
const Memo = memo(ForwardRef)
export default Memo
