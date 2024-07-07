import { Ref, SVGProps, forwardRef, memo } from 'react'

const GoogleSvgrepoCom1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'google-svgrepo-com-1_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#google-svgrepo-com-1_svg__a)'}>
      <path
        d={
          'M5.26 9.76A7.08 7.08 0 0 1 12 4.9c1.69 0 3.21.6 4.41 1.59L19.9 3c-2.12-1.86-4.85-3-7.9-3C7.27 0 3.19 2.69 1.23 6.65z'
        }
        fill={'#EA4335'}
      />
      <path
        d={
          'M16.04 18.01c-1.09.7-2.48 1.08-4.04 1.08-3.14 0-5.79-2.02-6.73-4.83l-4.04 3.07C3.19 21.29 7.26 24 12 24c2.93 0 5.73-1.05 7.83-3.01z'
        }
        fill={'#34A853'}
      />
      <path
        d={
          'M19.83 20.99c2.19-2.04 3.62-5.09 3.62-8.99 0-.71-.11-1.48-.27-2.19H12v4.64h6.43c-.32 1.56-1.17 2.77-2.39 3.56z'
        }
        fill={'#4A90E2'}
      />
      <path
        d={
          'M5.27 14.26c-.24-.71-.37-1.47-.37-2.26s.13-1.54.36-2.24L1.23 6.65C.43 8.26 0 10.07 0 12c0 1.91.44 3.73 1.23 5.33z'
        }
        fill={'#FBBC05'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(GoogleSvgrepoCom1)
const Memo = memo(ForwardRef)

export default Memo
