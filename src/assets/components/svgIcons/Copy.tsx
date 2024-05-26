import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgCopy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="copy_svg__a">
        <path fill="currentColor" fillOpacity={0} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h24v24H0z" />
    <g clipPath="url(#copy_svg__a)">
      <path
        fill="currentColor"
        d="M18 9h-3V5.67c-.01-.71-.29-1.39-.79-1.89S13.03 3 12.33 3H5.67c-.71 0-1.39.28-1.89.78S3 4.96 3 5.67v6.66c0 .7.28 1.38.78 1.88s1.18.78 1.89.79H9v3c0 .79.31 1.55.87 2.12.57.56 1.33.88 2.13.88h6c.79 0 1.55-.32 2.12-.88.56-.57.88-1.33.88-2.12v-6c0-.8-.32-1.56-.88-2.13C19.55 9.31 18.79 9 18 9m-9 3v1H5.67c-.18 0-.35-.08-.48-.2a.7.7 0 0 1-.19-.47V5.67c0-.18.07-.35.19-.48.13-.12.3-.19.48-.19h6.66c.17 0 .34.07.47.19.12.13.2.3.2.48V9h-1c-.8 0-1.56.31-2.13.87C9.31 10.44 9 11.2 9 12"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgCopy)
const Memo = memo(ForwardRef)
export default Memo
