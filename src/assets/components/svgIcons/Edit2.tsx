import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgEdit2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'edit-2_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#edit-2_svg__a)'} fill={'currentColor'}>
      <path
        d={
          'M19 20H5a.99.99 0 0 0-1 1c0 .26.1.51.29.7A1 1 0 0 0 5 22h14c.26 0 .51-.11.7-.3s.3-.44.3-.7a1 1 0 0 0-.3-.71.98.98 0 0 0-.7-.29M4.99 18h.1l4.16-.38c.46-.05.89-.25 1.22-.58l8.99-8.99c.35-.37.54-.87.53-1.37a1.93 1.93 0 0 0-.59-1.34L16.66 2.6c-.36-.34-.83-.53-1.32-.55-.49-.01-.97.16-1.34.47l-9.01 9.01c-.32.32-.52.75-.57 1.21l-.43 4.17c-.01.14.01.29.06.43s.13.26.23.36.21.17.33.22.25.08.38.08M15.27 4 18 6.73l-2 1.95L13.32 6z'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgEdit2)
const Memo = memo(ForwardRef)

export default Memo
