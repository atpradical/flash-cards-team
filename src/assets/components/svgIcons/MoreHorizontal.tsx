import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgMoreHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="more-horizontal_svg__a">
        <path fill="currentColor" fillOpacity={0} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor" fillRule="evenodd" clipPath="url(#more-horizontal_svg__a)">
      <path d="M14 12a2 2 0 1 1-4 0c0-1.11.89-2 2-2a2 2 0 0 1 2 2M21 12a2 2 0 1 1-4 0c0-1.11.89-2 2-2a2 2 0 0 1 2 2M7 12a2 2 0 1 1-4 0c0-1.11.89-2 2-2a2 2 0 0 1 2 2" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgMoreHorizontal)
const Memo = memo(ForwardRef)
export default Memo
