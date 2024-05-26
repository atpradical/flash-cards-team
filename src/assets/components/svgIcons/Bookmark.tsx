import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgBookmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="bookmark_svg__a">
        <path fill="currentColor" fillOpacity={0} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h24v24H0z" />
    <g clipPath="url(#bookmark_svg__a)">
      <path
        fill="currentColor"
        d="M6 21c-.18-.01-.35-.05-.5-.13-.15-.09-.28-.22-.37-.37A1 1 0 0 1 5 20V5.33c-.02-.6.2-1.19.62-1.62.41-.44.98-.69 1.58-.71h9.59c.6.02 1.17.27 1.58.71.42.43.64 1.02.63 1.62V20c-.01.17-.05.34-.14.49s-.21.28-.36.37c-.16.08-.33.13-.5.13-.18 0-.35-.05-.5-.13l-5.67-3.21-5.33 3.2c-.16.09-.33.14-.5.15"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgBookmark)
const Memo = memo(ForwardRef)
export default Memo
