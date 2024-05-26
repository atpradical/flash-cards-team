import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgHomeOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={'none'} ref={ref} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <defs>
      <clipPath id={'home-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#home-outline_svg__a)'}>
      <path
        d={
          'm20.42 10.18-7.71-7.89q-.15-.135-.33-.21A1 1 0 0 0 12 2c-.14 0-.27.03-.39.08s-.23.12-.32.21l-7.72 7.89c-.18.19-.33.42-.43.66-.1.25-.15.51-.14.78V20c-.01.51.19 1 .54 1.37s.83.6 1.35.63h14.22c.51-.03.99-.26 1.34-.63S21 20.51 21 20v-8.38c0-.54-.21-1.06-.58-1.44M10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-.3-.71.98.98 0 0 0-.7-.29H9a.99.99 0 0 0-1 1v7H5v-8.42l7-7.16 7 7.2z'
        }
        fill={'currentColor'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgHomeOutline)
const Memo = memo(ForwardRef)

export default Memo
