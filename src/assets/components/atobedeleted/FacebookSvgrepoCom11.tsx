import { Ref, SVGProps, forwardRef, memo } from 'react'

const FacebookSvgrepoCom11 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'facebook-svgrepo-com-1-1_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#facebook-svgrepo-com-1-1_svg__a)'}>
      <path d={'M8 4h13v20H8z'} fill={'#FFF'} />
      <path
        d={
          'M20.76 0H3.23C1.44 0 0 1.44 0 3.23v17.53c0 1.79 1.44 3.23 3.23 3.23h8.65l.01-8.57H9.66c-.29 0-.52-.24-.52-.53l-.01-2.76c-.01-.29.23-.53.52-.53h2.23V8.93c0-3.1 1.89-4.79 4.65-4.79h2.27c.29 0 .53.24.53.53V7c0 .29-.24.53-.53.53h-1.39c-1.5 0-1.79.71-1.79 1.76v2.31h3.3c.32 0 .56.28.52.59l-.32 2.76c-.04.27-.26.47-.53.47h-2.96L15.62 24h5.14a3.23 3.23 0 0 0 3.23-3.24V3.23c0-1.79-1.44-3.23-3.23-3.23'
        }
        fill={'#475993'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(FacebookSvgrepoCom11)
const Memo = memo(ForwardRef)

export default Memo
