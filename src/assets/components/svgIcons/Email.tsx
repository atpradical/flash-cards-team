import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgEmail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'email_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#email_svg__a)'}>
      <path
        d={
          'M19 4H5c-.8 0-1.56.31-2.13.87C2.31 5.44 2 6.2 2 7v10c0 .79.31 1.55.87 2.12.57.56 1.33.88 2.13.88h14c.79 0 1.55-.32 2.12-.88.56-.57.88-1.33.88-2.12V7c0-.8-.32-1.56-.88-2.13C20.55 4.31 19.79 4 19 4m0 2-6.5 4.47c-.16.08-.33.13-.5.13-.18 0-.35-.05-.5-.13L5 6z'
        }
        fill={'currentColor'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgEmail)
const Memo = memo(ForwardRef)

export default Memo
