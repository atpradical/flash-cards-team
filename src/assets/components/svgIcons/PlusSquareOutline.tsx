import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgPlusSquareOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={'none'} ref={ref} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <defs>
      <clipPath id={'plus-square-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#plus-square-outline_svg__a)'} fill={'currentColor'}>
      <path
        d={
          'M18 3H6c-.8 0-1.56.31-2.13.87C3.31 4.44 3 5.2 3 6v12c0 .79.31 1.55.87 2.12.57.56 1.33.88 2.13.88h12c.79 0 1.55-.32 2.12-.88.56-.57.88-1.33.88-2.12V6c0-.8-.32-1.56-.88-2.13C19.55 3.31 18.79 3 18 3m1 15c0 .26-.11.51-.3.7s-.44.3-.7.3H6a1 1 0 0 1-.71-.3A.98.98 0 0 1 5 18V6a.99.99 0 0 1 1-1h12c.26 0 .51.1.7.29A1 1 0 0 1 19 6z'
        }
      />
      <path
        d={
          'M15 11h-2V9a1 1 0 0 0-.3-.71A.98.98 0 0 0 12 8a.99.99 0 0 0-1 1v2H9a.99.99 0 0 0-1 1c0 .26.1.51.29.7A1 1 0 0 0 9 13h2v2c0 .26.1.51.29.7a1 1 0 0 0 .71.3c.26 0 .51-.11.7-.3s.3-.44.3-.7v-2h2c.26 0 .51-.11.7-.3s.3-.44.3-.7a1 1 0 0 0-.3-.71.98.98 0 0 0-.7-.29'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgPlusSquareOutline)
const Memo = memo(ForwardRef)

export default Memo
