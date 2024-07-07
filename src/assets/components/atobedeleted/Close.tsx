import { Ref, SVGProps, forwardRef, memo } from 'react'

const Close = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'close_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#close_svg__a)'}>
      <path
        d={
          'm13.41 12 4.29-4.29c.19-.19.3-.45.3-.71 0-.27-.11-.53-.3-.71a.976.976 0 0 0-1.41 0L12 10.59l-4.29-4.3c-.19-.19-.45-.3-.71-.3-.27 0-.53.11-.71.3-.19.18-.3.44-.3.71 0 .26.11.52.3.71l4.3 4.29-4.3 4.29c-.1.09-.17.2-.22.32s-.08.25-.08.39a1 1 0 0 0 .3.7c.09.1.2.17.32.22s.25.08.39.08c.13 0 .26-.03.38-.08s.23-.12.33-.22L12 13.41l4.29 4.29c.09.1.2.17.32.22s.25.08.39.08a1 1 0 0 0 .7-.3.995.995 0 0 0 .3-.7c0-.14-.03-.27-.08-.39a.9.9 0 0 0-.22-.32z'
        }
        fill={'currentColor'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(Close)
const Memo = memo(ForwardRef)

export default Memo
