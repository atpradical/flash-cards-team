import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgEyeOffOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={'none'} ref={ref} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <defs>
      <clipPath id={'eye-off-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#eye-off-outline_svg__a)'} fill={'currentColor'}>
      <path
        d={
          'M4.71 3.29c-.1-.1-.21-.17-.33-.22A1 1 0 0 0 4 2.99c-.14 0-.27.03-.39.08s-.23.12-.32.22c-.19.18-.3.44-.3.71 0 .26.11.52.3.71l5.63 5.63c-.36.66-.49 1.42-.38 2.16.1.75.45 1.44.98 1.97s1.22.88 1.97.98c.74.11 1.5-.02 2.17-.37l5.63 5.63c.09.09.2.16.32.21s.25.08.39.08c.13 0 .26-.03.38-.08q.18-.075.33-.21.135-.15.21-.33c.05-.12.08-.25.08-.38 0-.14-.03-.27-.08-.39a1 1 0 0 0-.21-.32zM12 13.5c-.4 0-.78-.16-1.07-.44-.28-.29-.43-.67-.43-1.06v-.07l1.56 1.56z'
        }
      />
      <path
        d={
          'M12.22 17c-4.3.1-7.12-3.59-8-5 .62-1 1.37-1.92 2.24-2.72L5 7.87c-1.13 1.06-2.1 2.28-2.87 3.63-.09.15-.14.32-.14.5 0 .17.05.34.14.5.63 1.09 4 6.5 9.89 6.5h.25c1.1-.04 2.2-.26 3.23-.67l-1.58-1.58c-.56.14-1.13.23-1.7.25M21.87 11.5c-.64-1.11-4.17-6.69-10.14-6.5a9.1 9.1 0 0 0-3.23.67l1.58 1.58c.55-.15 1.12-.24 1.7-.25 4.29-.11 7.11 3.59 8 5-.65 1-1.42 1.91-2.29 2.72l1.51 1.4c1.14-1.06 2.12-2.28 2.91-3.62.08-.16.12-.33.11-.51s-.06-.35-.15-.49'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgEyeOffOutline)
const Memo = memo(ForwardRef)

export default Memo
