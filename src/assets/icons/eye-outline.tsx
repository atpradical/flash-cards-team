import { Ref, SVGProps, forwardRef, memo } from 'react'

const EyeOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'eye-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#eye-outline_svg__a)'} fill={'currentColor'}>
      <path
        d={
          'M21.87 11.5c-.64-1.11-4.17-6.69-10.14-6.5-5.53.14-8.73 5-9.6 6.5-.09.15-.14.32-.14.5 0 .17.05.34.14.5.63 1.09 4 6.5 9.89 6.5h.25c5.52-.14 8.74-5 9.6-6.5.08-.16.13-.33.13-.5 0-.18-.05-.35-.13-.5M12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.91 7.61-5 4.29-.11 7.11 3.59 8 5-1.04 1.61-3.62 4.9-7.61 5'
        }
      />
      <path
        d={
          'M12 8.5c-.7 0-1.37.2-1.95.58-.58.39-1.02.94-1.29 1.58-.26.64-.33 1.34-.2 2.02.14.68.47 1.3.96 1.79s1.11.82 1.79.96c.68.13 1.38.06 2.02-.2.64-.27 1.19-.71 1.58-1.29.38-.58.59-1.25.59-1.94 0-.93-.37-1.82-1.03-2.48A3.5 3.5 0 0 0 12 8.5m0 5c-.3 0-.59-.09-.84-.26-.24-.16-.44-.4-.55-.67-.11-.28-.14-.58-.09-.87.06-.29.2-.56.41-.77s.48-.35.77-.41c.29-.05.59-.02.87.09.27.11.51.31.67.55a1.49 1.49 0 0 1-.18 1.9c-.29.28-.67.44-1.06.44'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(EyeOutline)
const Memo = memo(ForwardRef)

export default Memo
