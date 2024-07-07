import { Ref, SVGProps, forwardRef, memo } from 'react'

const TrendingUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'trending-up_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#trending-up_svg__a)'}>
      <path
        d={
          'M21 7v-.21a1 1 0 0 0-.05-.17c-.03-.05-.06-.1-.09-.14a.6.6 0 0 0-.14-.17l-.12-.07a.6.6 0 0 0-.19-.1h-.21A.7.7 0 0 0 20 6h-5a.99.99 0 0 0-1 1c0 .26.1.51.29.7A1 1 0 0 0 15 8h2.83l-4 4.71-4.32-2.57a.984.984 0 0 0-1.28.22l-5 6c-.09.1-.15.21-.19.34-.04.12-.05.26-.04.39s.05.26.11.37c.06.12.14.22.25.31.17.14.4.23.64.23.14 0 .29-.04.42-.1s.25-.15.35-.26l4.45-5.34 4.27 2.56c.2.12.44.16.67.12s.44-.16.6-.33L19 9.7V12c0 .26.1.51.29.7a1 1 0 0 0 .71.3c.26 0 .51-.11.7-.3s.3-.44.3-.7z'
        }
        fill={'currentColor'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(TrendingUp)
const Memo = memo(ForwardRef)

export default Memo
