import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={'none'} ref={ref} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <defs>
      <clipPath id={'star_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#star_svg__a)'}>
      <path
        d={
          'M17.56 21c-.16 0-.32-.04-.46-.11L12 18.21l-5.1 2.68c-.17.08-.36.12-.54.11-.19-.02-.37-.08-.52-.19a.99.99 0 0 1-.39-.98l1-5.63-4.12-4c-.13-.13-.22-.29-.27-.47a.95.95 0 0 1 .02-.53.95.95 0 0 1 .3-.46c.15-.12.32-.2.51-.23l5.7-.83 2.51-5.13c.08-.16.2-.31.36-.41a1.02 1.02 0 0 1 1.07 0c.16.1.28.25.37.41l2.54 5.12 5.7.83c.18.03.35.11.5.23.14.12.25.28.31.45.05.18.05.36.01.54-.05.18-.14.34-.26.46l-4.12 4.01 1 5.63c.03.18.01.38-.06.55-.07.18-.19.33-.34.45-.19.12-.4.19-.62.18'
        }
        fill={'currentColor'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgStar)
const Memo = memo(ForwardRef)

export default Memo
