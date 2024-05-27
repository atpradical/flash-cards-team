import { Ref, SVGProps, forwardRef, memo } from 'react'

const PlayCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'play-circle_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#play-circle_svg__a)'} fill={'currentColor'}>
      <path d={'m11.5 14.6 2.81-2.6-2.81-2.61z'} />
      <path
        d={
          'M12 2c-1.98 0-3.92.58-5.56 1.68a9.9 9.9 0 0 0-3.68 4.49 9.95 9.95 0 0 0-.57 5.78c.38 1.94 1.34 3.72 2.73 5.12 1.4 1.39 3.18 2.35 5.12 2.73 1.94.39 3.95.19 5.78-.57a9.9 9.9 0 0 0 4.49-3.68A10 10 0 0 0 22 12c0-1.32-.26-2.62-.77-3.83-.5-1.22-1.24-2.32-2.16-3.25-.93-.92-2.03-1.66-3.25-2.16A9.8 9.8 0 0 0 12 2m4 11.18-3.64 3.36c-.32.29-.74.45-1.16.46-.24-.01-.48-.06-.69-.15-.3-.12-.55-.33-.73-.59-.18-.27-.27-.58-.27-.89V8.63c0-.32.09-.63.27-.9.18-.26.43-.47.73-.59.3-.13.64-.18.97-.12.32.05.63.2.88.43L16 10.82a1.56 1.56 0 0 1 .51 1.18c0 .22-.04.44-.13.64s-.22.39-.38.54'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(PlayCircle)
const Memo = memo(ForwardRef)

export default Memo
