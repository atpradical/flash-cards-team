import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgMoreHorizontalOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={'none'} ref={ref} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <defs>
      <clipPath id={'more-horizontal-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#more-horizontal-outline_svg__a)'} fill={'currentColor'} fillRule={'evenodd'}>
      <path
        d={
          'M14 12a2 2 0 1 1-4 0c0-1.11.89-2 2-2a2 2 0 0 1 2 2M21 12a2 2 0 1 1-4 0c0-1.11.89-2 2-2a2 2 0 0 1 2 2M7 12a2 2 0 1 1-4 0c0-1.11.89-2 2-2a2 2 0 0 1 2 2'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgMoreHorizontalOutline)
const Memo = memo(ForwardRef)

export default Memo
