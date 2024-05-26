import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgPauseCircleOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={'none'} ref={ref} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <defs>
      <clipPath id={'pause-circle-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#pause-circle-outline_svg__a)'} fill={'currentColor'}>
      <path
        d={
          'M12 2c-1.98 0-3.92.58-5.56 1.68a9.9 9.9 0 0 0-3.68 4.49 9.95 9.95 0 0 0-.57 5.78c.38 1.94 1.34 3.72 2.73 5.12 1.4 1.39 3.18 2.35 5.12 2.73 1.94.39 3.95.19 5.78-.57a9.9 9.9 0 0 0 4.49-3.68A10 10 0 0 0 22 12c0-1.32-.26-2.62-.77-3.83-.5-1.22-1.24-2.32-2.16-3.25-.93-.92-2.03-1.66-3.25-2.16A9.8 9.8 0 0 0 12 2m0 18a8.022 8.022 0 0 1-7.4-4.94 8.06 8.06 0 0 1-.45-4.63 8 8 0 0 1 2.19-4.09 8 8 0 0 1 4.09-2.19 8.06 8.06 0 0 1 4.63.45A8.02 8.02 0 0 1 20 12c0 2.12-.85 4.15-2.35 5.65A8 8 0 0 1 12 20'
        }
      />
      <path
        d={
          'M15 8a.99.99 0 0 0-1 1v6c0 .26.1.51.29.7a1 1 0 0 0 .71.3c.26 0 .51-.11.7-.3s.3-.44.3-.7V9a1 1 0 0 0-.3-.71A.98.98 0 0 0 15 8M9 8a.99.99 0 0 0-1 1v6c0 .26.1.51.29.7A1 1 0 0 0 9 16c.26 0 .51-.11.7-.3s.3-.44.3-.7V9a1 1 0 0 0-.3-.71A.98.98 0 0 0 9 8'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgPauseCircleOutline)
const Memo = memo(ForwardRef)

export default Memo
