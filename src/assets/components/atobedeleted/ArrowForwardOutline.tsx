import { Ref, SVGProps, forwardRef, memo } from 'react'

const ArrowForwardOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'arrow-forward-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#arrow-forward-outline_svg__a)'}>
      <path
        d={
          'M5 13h11.86l-3.63 4.36c-.09.1-.15.21-.19.34-.04.12-.05.26-.04.39a.996.996 0 0 0 1.09.9c.26-.02.51-.15.68-.35l5-6 .09-.15c0-.05.05-.08.07-.13.04-.12.06-.24.07-.36-.01-.13-.03-.25-.07-.36 0-.05-.06-.08-.07-.13a1 1 0 0 0-.09-.15l-5-6c-.1-.12-.22-.21-.35-.27A.9.9 0 0 0 14 5a.92.92 0 0 0-.64.23c-.11.08-.19.18-.25.3-.06.11-.1.24-.11.37a1.02 1.02 0 0 0 .23.74L16.86 11H5a.99.99 0 0 0-1 1c0 .26.1.51.29.7A1 1 0 0 0 5 13'
        }
        fill={'currentColor'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ArrowForwardOutline)
const Memo = memo(ForwardRef)

export default Memo
