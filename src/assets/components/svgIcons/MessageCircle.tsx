import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgMessageCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="message-circle_svg__a">
        <path fill="currentColor" fillOpacity={0} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h24v24H0z" />
    <g clipPath="url(#message-circle_svg__a)">
      <path
        fill="currentColor"
        d="M19.07 4.93a10 10 0 0 0-6.13-2.91 9.94 9.94 0 0 0-6.57 1.67 10.02 10.02 0 0 0-4 5.47c-.65 2.23-.51 4.63.41 6.77.1.19.13.42.1.64l-.89 4.23c-.03.16-.02.33.03.48a.94.94 0 0 0 .58.64c.13.05.26.08.39.08h.21l4.28-.86c.21-.03.43 0 .64.09 2.13.92 4.53 1.06 6.76.41a10.02 10.02 0 0 0 5.47-4 9.94 9.94 0 0 0 1.67-6.57c-.23-2.32-1.25-4.48-2.9-6.12zM8 13a1.014 1.014 0 0 1-.93-.62c-.07-.18-.09-.39-.06-.58.04-.19.14-.37.28-.51s.32-.24.51-.28c.19-.03.39-.01.58.06.18.08.34.21.45.37S9 11.8 9 12c0 .26-.11.51-.3.7s-.44.3-.7.3m4 0c-.2 0-.4-.06-.56-.17s-.29-.27-.37-.45c-.07-.18-.09-.39-.06-.58.04-.19.14-.37.28-.51s.32-.24.51-.28c.19-.03.4-.01.58.06.18.08.34.21.45.37s.17.36.17.56c0 .26-.11.51-.3.7s-.44.3-.7.3m4 0c-.2 0-.4-.06-.56-.17s-.29-.27-.37-.45c-.07-.18-.09-.39-.06-.58.04-.19.14-.37.28-.51s.32-.24.51-.28c.19-.03.4-.01.58.06.18.08.34.21.45.37s.17.36.17.56c0 .26-.11.51-.3.7s-.44.3-.7.3"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgMessageCircle)
const Memo = memo(ForwardRef)
export default Memo
