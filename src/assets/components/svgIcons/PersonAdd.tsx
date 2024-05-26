import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgPersonAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="person-add_svg__a">
        <path fill="currentColor" fillOpacity={0} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor" clipPath="url(#person-add_svg__a)">
      <path d="M21 6h-1V5a1 1 0 0 0-.3-.71A.98.98 0 0 0 19 4a.99.99 0 0 0-1 1v1h-1a.99.99 0 0 0-1 1c0 .26.1.51.29.7A1 1 0 0 0 17 8h1v1c0 .26.1.51.29.7a1 1 0 0 0 .71.3c.26 0 .51-.11.7-.3s.3-.44.3-.7V8h1c.26 0 .51-.11.7-.3s.3-.44.3-.7a1 1 0 0 0-.3-.71A.98.98 0 0 0 21 6M10 11c.79 0 1.56-.24 2.22-.68s1.17-1.06 1.47-1.79c.3-.74.38-1.54.23-2.32a4.05 4.05 0 0 0-3.14-3.14C10 2.92 9.2 3 8.46 3.3c-.73.3-1.35.81-1.79 1.47S6 6.2 6 7c0 1.06.42 2.07 1.17 2.82S8.93 11 10 11M16 21c.26 0 .51-.11.7-.3s.3-.44.3-.7c0-1.86-.74-3.64-2.06-4.95A6.95 6.95 0 0 0 10 13c-1.86 0-3.64.73-4.95 2.05A6.96 6.96 0 0 0 3 20c0 .26.1.51.29.7A1 1 0 0 0 4 21z" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgPersonAdd)
const Memo = memo(ForwardRef)
export default Memo
