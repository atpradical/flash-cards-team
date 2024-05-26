import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgCreditCardOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="credit-card-outline_svg__a">
        <path fill="currentColor" fillOpacity={0} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor" clipPath="url(#credit-card-outline_svg__a)">
      <path d="M19 5H5c-.8 0-1.56.31-2.13.87C2.31 6.44 2 7.2 2 8v8c0 .79.31 1.55.87 2.12.57.56 1.33.88 2.13.88h14c.79 0 1.55-.32 2.12-.88.56-.57.88-1.33.88-2.12V8c0-.8-.32-1.56-.88-2.13C20.55 5.31 19.79 5 19 5M4 8a.99.99 0 0 1 1-1h14c.26 0 .51.1.7.29A1 1 0 0 1 20 8v1H4zm16 8c0 .26-.11.51-.3.7s-.44.3-.7.3H5a1 1 0 0 1-.71-.3A.98.98 0 0 1 4 16v-5h16z" />
      <path d="M7 15h4c.26 0 .51-.11.7-.3s.3-.44.3-.7a1 1 0 0 0-.3-.71.98.98 0 0 0-.7-.29H7a.99.99 0 0 0-1 1c0 .26.1.51.29.7A1 1 0 0 0 7 15M15 15h2c.26 0 .51-.11.7-.3s.3-.44.3-.7a1 1 0 0 0-.3-.71.98.98 0 0 0-.7-.29h-2a.99.99 0 0 0-1 1c0 .26.1.51.29.7a1 1 0 0 0 .71.3" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgCreditCardOutline)
const Memo = memo(ForwardRef)
export default Memo
