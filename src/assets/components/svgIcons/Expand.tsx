import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgExpand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={'none'} ref={ref} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <defs>
      <clipPath id={'expand_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#expand_svg__a)'} fill={'currentColor'}>
      <path
        d={
          'M20 5a1 1 0 0 0-.3-.71A.98.98 0 0 0 19 4h-5a.99.99 0 0 0-1 1c0 .26.1.51.29.7A1 1 0 0 0 14 6h2.57l-3.28 3.29c-.1.09-.17.2-.22.32s-.08.25-.08.39c0 .13.03.26.08.38s.12.23.22.33c.09.09.2.16.32.21s.25.08.39.08c.13 0 .26-.03.38-.08q.18-.075.33-.21L18 7.42V10c0 .26.1.51.29.7a1 1 0 0 0 .71.3c.26 0 .51-.11.7-.3s.3-.44.3-.7zM10.71 13.29c-.1-.1-.21-.17-.33-.22a1 1 0 0 0-.38-.08c-.14 0-.27.03-.39.08s-.23.12-.32.22L6 16.57V14a1 1 0 0 0-.3-.71A.98.98 0 0 0 5 13a.99.99 0 0 0-1 1v5c0 .26.1.51.29.7A1 1 0 0 0 5 20h5c.26 0 .51-.11.7-.3s.3-.44.3-.7a1 1 0 0 0-.3-.71.98.98 0 0 0-.7-.29H7.42l3.29-3.29q.135-.15.21-.33c.05-.12.08-.25.08-.38 0-.14-.03-.27-.08-.39a1 1 0 0 0-.21-.32'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgExpand)
const Memo = memo(ForwardRef)

export default Memo
