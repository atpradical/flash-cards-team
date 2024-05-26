import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgCalendar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="calendar_svg__a">
        <path fill="currentColor" fillOpacity={0} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h24v24H0z" />
    <g clipPath="url(#calendar_svg__a)">
      <path
        fill="currentColor"
        d="M18 4h-1V3a1 1 0 0 0-.3-.71A.98.98 0 0 0 16 2a.99.99 0 0 0-1 1v1H9V3a1 1 0 0 0-.3-.71A.98.98 0 0 0 8 2a.99.99 0 0 0-1 1v1H6c-.8 0-1.56.31-2.13.87C3.31 5.44 3 6.2 3 7v12c0 .79.31 1.55.87 2.12.57.56 1.33.88 2.13.88h12c.79 0 1.55-.32 2.12-.88.56-.57.88-1.33.88-2.12V7c0-.8-.32-1.56-.88-2.13C19.55 4.31 18.79 4 18 4M8 17a1.014 1.014 0 0 1-.93-.62c-.07-.18-.09-.39-.06-.58.04-.19.14-.37.28-.51s.32-.24.51-.28c.19-.03.39-.01.58.06.18.08.34.21.45.37S9 15.8 9 16c0 .26-.11.51-.3.7s-.44.3-.7.3m8 0h-4a1 1 0 0 1-.71-.3.98.98 0 0 1-.29-.7.99.99 0 0 1 1-1h4c.26 0 .51.1.7.29a1 1 0 0 1 .3.71c0 .26-.11.51-.3.7s-.44.3-.7.3m3-6H5V7a.99.99 0 0 1 1-1h1v1c0 .26.1.51.29.7A1 1 0 0 0 8 8c.26 0 .51-.11.7-.3S9 7.26 9 7V6h6v1c0 .26.1.51.29.7A1 1 0 0 0 16 8c.26 0 .51-.11.7-.3s.3-.44.3-.7V6h1c.26 0 .51.1.7.29A1 1 0 0 1 19 7z"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgCalendar)
const Memo = memo(ForwardRef)
export default Memo
