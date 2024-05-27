import { Ref, SVGProps, forwardRef, memo } from 'react'

const MaximizeOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'maximize-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#maximize-outline_svg__a)'} fill={'currentColor'}>
      <path
        d={
          'm20.71 19.29-3.4-3.39A8 8 0 0 0 19 11a8.022 8.022 0 0 0-4.94-7.4 8.06 8.06 0 0 0-4.63-.45 8 8 0 0 0-4.09 2.19 8 8 0 0 0-2.19 4.09 8.06 8.06 0 0 0 .45 4.63A8.02 8.02 0 0 0 11 19c1.77 0 3.5-.6 4.9-1.69l3.39 3.4c.09.09.2.16.32.21s.25.08.39.08c.13 0 .26-.03.38-.08q.18-.075.33-.21.135-.15.21-.33c.05-.12.08-.25.08-.38 0-.14-.03-.27-.08-.39a1 1 0 0 0-.21-.32M5 11a5.994 5.994 0 0 1 3.7-5.55c1.1-.45 2.3-.57 3.47-.34a5.99 5.99 0 0 1 4.71 4.71c.23 1.17.11 2.37-.34 3.47a6 6 0 0 1-2.21 2.69C13.34 16.64 12.18 17 11 17c-1.6 0-3.12-.64-4.25-1.76A6.02 6.02 0 0 1 5 11'
        }
      />
      <path
        d={
          'M13 10h-1V9a1 1 0 0 0-.3-.71A.98.98 0 0 0 11 8a.99.99 0 0 0-1 1v1H9a.99.99 0 0 0-1 1c0 .26.1.51.29.7A1 1 0 0 0 9 12h1v1c0 .26.1.51.29.7a1 1 0 0 0 .71.3c.26 0 .51-.11.7-.3s.3-.44.3-.7v-1h1c.26 0 .51-.11.7-.3s.3-.44.3-.7a1 1 0 0 0-.3-.71.98.98 0 0 0-.7-.29'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(MaximizeOutline)
const Memo = memo(ForwardRef)

export default Memo
