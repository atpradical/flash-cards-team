import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgCopyOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={'none'} ref={ref} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <defs>
      <clipPath id={'copy-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#copy-outline_svg__a)'} fill={'currentColor'}>
      <path
        d={
          'M18 21h-6c-.8 0-1.56-.32-2.13-.88C9.31 19.55 9 18.79 9 18v-6c0-.8.31-1.56.87-2.13C10.44 9.31 11.2 9 12 9h6c.79 0 1.55.31 2.12.87.56.57.88 1.33.88 2.13v6c0 .79-.32 1.55-.88 2.12-.57.56-1.33.88-2.12.88m-6-10a.99.99 0 0 0-1 1v6c0 .26.1.51.29.7a1 1 0 0 0 .71.3h6c.26 0 .51-.11.7-.3s.3-.44.3-.7v-6a1 1 0 0 0-.3-.71.98.98 0 0 0-.7-.29z'
        }
      />
      <path
        d={
          'M9.72 15H5.67c-.71-.01-1.39-.29-1.89-.79S3 13.03 3 12.33V5.67c0-.71.28-1.39.78-1.89S4.96 3 5.67 3h6.66c.7 0 1.38.28 1.88.78s.78 1.18.79 1.89v3.72h-2V5.67c0-.18-.08-.35-.2-.48a.7.7 0 0 0-.47-.19H5.67c-.18 0-.35.07-.48.19-.12.13-.19.3-.19.48v6.66c0 .17.07.34.19.47.13.12.3.2.48.2h4.05z'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgCopyOutline)
const Memo = memo(ForwardRef)

export default Memo
