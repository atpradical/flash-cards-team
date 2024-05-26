import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgMoreVerticalOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="more-vertical-outline_svg__a">
        <path fill="currentColor" fillOpacity={0} d="M6 6h12v12H6z" />
      </clipPath>
    </defs>
    <circle cx={12} cy={12} r={8.5} stroke="currentColor" />
    <path fill="none" d="M6 6h12v12H6z" />
    <g fill="currentColor" fillRule="evenodd" clipPath="url(#more-vertical-outline_svg__a)">
      <path d="M13 12c0 .55-.45 1-1 1-.56 0-1-.45-1-1 0-.56.44-1 1-1 .55 0 1 .44 1 1M13 8.5c0 .55-.45 1-1 1-.56 0-1-.45-1-1 0-.56.44-1 1-1 .55 0 1 .44 1 1M13 15.5c0 .55-.45 1-1 1-.56 0-1-.45-1-1 0-.56.44-1 1-1 .55 0 1 .44 1 1" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgMoreVerticalOutline)
const Memo = memo(ForwardRef)
export default Memo
