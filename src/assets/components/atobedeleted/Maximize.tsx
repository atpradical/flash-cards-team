import { Ref, SVGProps, forwardRef, memo } from 'react'

const Maximize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'maximize_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#maximize_svg__a)'}>
      <path
        d={
          'm20.71 19.29-3.4-3.39A8 8 0 0 0 19 11a8.022 8.022 0 0 0-4.94-7.4 8.06 8.06 0 0 0-4.63-.45 8 8 0 0 0-4.09 2.19 8 8 0 0 0-2.19 4.09 8.06 8.06 0 0 0 .45 4.63A8.02 8.02 0 0 0 11 19c1.77 0 3.5-.6 4.9-1.69l3.39 3.4c.09.09.2.16.32.21s.25.08.39.08c.13 0 .26-.03.38-.08q.18-.075.33-.21.135-.15.21-.33c.05-.12.08-.25.08-.38 0-.14-.03-.27-.08-.39a1 1 0 0 0-.21-.32M13 12h-1v1c0 .26-.11.51-.3.7s-.44.3-.7.3a1 1 0 0 1-.71-.3.98.98 0 0 1-.29-.7v-1H9a1 1 0 0 1-.71-.3A.98.98 0 0 1 8 11a.99.99 0 0 1 1-1h1V9a.99.99 0 0 1 1-1c.26 0 .51.1.7.29A1 1 0 0 1 12 9v1h1c.26 0 .51.1.7.29a1 1 0 0 1 .3.71c0 .26-.11.51-.3.7s-.44.3-.7.3'
        }
        fill={'currentColor'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(Maximize)
const Memo = memo(ForwardRef)

export default Memo
