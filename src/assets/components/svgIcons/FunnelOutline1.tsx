import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgFunnelOutline1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="funnel-outline-1_svg__a">
        <path fill="currentColor" fillOpacity={0} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h24v24H0z" />
    <g clipPath="url(#funnel-outline-1_svg__a)">
      <path
        fill="currentColor"
        d="M13.9 22c-.22 0-.43-.08-.6-.2l-4-3.05a.9.9 0 0 1-.29-.36.86.86 0 0 1-.1-.44v-3.27l-4.8-9.22c-.08-.16-.12-.33-.12-.5.01-.17.06-.34.15-.49.09-.14.21-.26.36-.35A.95.95 0 0 1 5 4h14c.17 0 .34.04.49.13.15.08.28.21.37.36.08.15.13.32.13.5 0 .17-.05.34-.13.5l-5 9.21V21c0 .18-.05.36-.15.52s-.24.29-.4.38c-.13.06-.27.09-.41.1m-3-4.55 2 1.54v-4.55c-.01-.16.03-.31.1-.44l4.29-8H6.64l4.13 8c.07.14.11.3.11.46z"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgFunnelOutline1)
const Memo = memo(ForwardRef)
export default Memo
