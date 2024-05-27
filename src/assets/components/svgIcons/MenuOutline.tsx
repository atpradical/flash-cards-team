import { Ref, SVGProps, forwardRef, memo } from 'react'

const MenuOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'menu-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#menu-outline_svg__a)'} fill={'currentColor'} fillRule={'evenodd'}>
      <path
        d={
          'M3.95 11h16.09c.53 0 .96.42.96.95v.1c0 .52-.43.95-.96.95H3.95a.95.95 0 0 1-.95-.95v-.1c0-.53.42-.95.95-.95M3.95 16h16.09c.53 0 .96.42.96.95v.09c0 .53-.43.96-.96.96H3.95c-.53 0-.95-.43-.95-.96v-.09c0-.53.42-.95.95-.95M3.95 6h16.09c.53 0 .96.42.96.95v.1c0 .52-.43.95-.96.95H3.95A.95.95 0 0 1 3 7.05v-.1c0-.53.42-.95.95-.95'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(MenuOutline)
const Memo = memo(ForwardRef)

export default Memo
