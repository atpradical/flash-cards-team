import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={'none'} ref={ref} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <defs>
      <clipPath id={'home_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#home_svg__a)'} fill={'currentColor'}>
      <path d={'M10 14h4v7h-4z'} fillRule={'evenodd'} />
      <path
        d={
          'm20.42 10.18-7.71-7.89q-.15-.135-.33-.21A1 1 0 0 0 12 2c-.14 0-.27.03-.39.08s-.23.12-.32.21l-7.72 7.89c-.18.19-.33.42-.43.66-.1.25-.15.51-.14.78V20c-.01.51.19 1 .54 1.37s.83.6 1.35.63H8v-9a.99.99 0 0 1 1-1h6c.26 0 .51.1.7.29a1 1 0 0 1 .3.71v9h3.11c.51-.03.99-.26 1.34-.63S21 20.51 21 20v-8.38c0-.54-.21-1.06-.58-1.44'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgHome)
const Memo = memo(ForwardRef)

export default Memo
