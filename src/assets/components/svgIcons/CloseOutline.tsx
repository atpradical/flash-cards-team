import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgCloseOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="close-outline_svg__a">
        <path fill="currentColor" fillOpacity={0} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h24v24H0z" />
    <g clipPath="url(#close-outline_svg__a)">
      <path
        fill="currentColor"
        d="m13.41 12 4.29-4.29c.19-.19.3-.45.3-.71 0-.27-.11-.53-.3-.71a.976.976 0 0 0-1.41 0L12 10.59l-4.29-4.3c-.19-.19-.45-.3-.71-.3-.27 0-.53.11-.71.3-.19.18-.3.44-.3.71 0 .26.11.52.3.71l4.3 4.29-4.3 4.29c-.1.09-.17.2-.22.32s-.08.25-.08.39a1 1 0 0 0 .3.7c.09.1.2.17.32.22s.25.08.39.08c.13 0 .26-.03.38-.08s.23-.12.33-.22L12 13.41l4.29 4.29c.09.1.2.17.32.22s.25.08.39.08a1 1 0 0 0 .7-.3.995.995 0 0 0 .3-.7c0-.14-.03-.27-.08-.39a.9.9 0 0 0-.22-.32z"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgCloseOutline)
const Memo = memo(ForwardRef)
export default Memo
