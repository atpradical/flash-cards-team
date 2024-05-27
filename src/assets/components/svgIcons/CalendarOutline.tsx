import { Ref, SVGProps, forwardRef, memo } from 'react'

const CalendarOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'calendar-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#calendar-outline_svg__a)'} fill={'currentColor'}>
      <path
        d={
          'M18 4h-1V3a1 1 0 0 0-.3-.71A.98.98 0 0 0 16 2a.99.99 0 0 0-1 1v1H9V3a1 1 0 0 0-.3-.71A.98.98 0 0 0 8 2a.99.99 0 0 0-1 1v1H6c-.8 0-1.56.31-2.13.87C3.31 5.44 3 6.2 3 7v12c0 .79.31 1.55.87 2.12.57.56 1.33.88 2.13.88h12c.79 0 1.55-.32 2.12-.88.56-.57.88-1.33.88-2.12V7c0-.8-.32-1.56-.88-2.13C19.55 4.31 18.79 4 18 4M6 6h1v1c0 .26.1.51.29.7A1 1 0 0 0 8 8c.26 0 .51-.11.7-.3S9 7.26 9 7V6h6v1c0 .26.1.51.29.7A1 1 0 0 0 16 8c.26 0 .51-.11.7-.3s.3-.44.3-.7V6h1c.26 0 .51.1.7.29A1 1 0 0 1 19 7v4H5V7a.99.99 0 0 1 1-1m12 14H6a1 1 0 0 1-.71-.3A.98.98 0 0 1 5 19v-6h14v6c0 .26-.11.51-.3.7s-.44.3-.7.3'
        }
      />
      <path
        d={'M9 16c0 .55-.45 1-1 1-.56 0-1-.45-1-1 0-.56.44-1 1-1 .55 0 1 .44 1 1'}
        fillRule={'evenodd'}
      />
      <path
        d={
          'M16 15h-4a.99.99 0 0 0-1 1c0 .26.1.51.29.7a1 1 0 0 0 .71.3h4c.26 0 .51-.11.7-.3s.3-.44.3-.7a1 1 0 0 0-.3-.71.98.98 0 0 0-.7-.29'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(CalendarOutline)
const Memo = memo(ForwardRef)

export default Memo
