import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgPinOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={'none'} ref={ref} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <defs>
      <clipPath id={'pin-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#pin-outline_svg__a)'} fill={'currentColor'}>
      <path
        d={
          'M12 2c-2.11-.01-4.14.83-5.63 2.31A8 8 0 0 0 4 9.92c0 5.48 7.05 11.58 7.35 11.84.18.15.41.24.65.24.23 0 .46-.09.65-.24C13 21.5 20 15.4 20 9.92a8.04 8.04 0 0 0-2.38-5.61A7.95 7.95 0 0 0 12 2m0 17.65c-1.67-1.59-6-6-6-9.73 0-1.6.63-3.12 1.75-4.25a6.025 6.025 0 0 1 8.49 0A6.04 6.04 0 0 1 18 9.92c0 3.7-4.33 8.14-6 9.73'
        }
      />
      <path
        d={
          'M12 6c-.7 0-1.37.2-1.95.58-.58.39-1.02.94-1.29 1.58-.26.64-.33 1.34-.2 2.02.14.68.47 1.3.96 1.79s1.11.82 1.79.96c.68.13 1.38.06 2.02-.2.64-.27 1.19-.71 1.58-1.29.38-.58.59-1.25.59-1.94 0-.93-.37-1.82-1.03-2.48A3.5 3.5 0 0 0 12 6m0 5c-.3 0-.59-.09-.84-.26-.24-.16-.44-.4-.55-.67-.11-.28-.14-.58-.09-.87.06-.29.2-.56.41-.77s.48-.35.77-.41c.29-.05.59-.02.87.09.27.11.51.3.67.55a1.49 1.49 0 0 1-.18 1.9c-.29.28-.67.44-1.06.44'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgPinOutline)
const Memo = memo(ForwardRef)

export default Memo
