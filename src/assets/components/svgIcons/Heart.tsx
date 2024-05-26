import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgHeart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="heart_svg__a">
        <path fill="currentColor" fillOpacity={0} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h24v24H0z" />
    <g clipPath="url(#heart_svg__a)">
      <path
        fill="currentColor"
        d="M12 21c-.14 0-.27-.03-.39-.08a1 1 0 0 1-.32-.21l-7.78-7.78a5.3 5.3 0 0 1-1.52-3.71c0-1.38.55-2.71 1.52-3.69A5.27 5.27 0 0 1 7.22 4c1.38 0 2.71.55 3.7 1.53L12 6.61l1.08-1.08A5.23 5.23 0 0 1 16.78 4c1.38 0 2.71.55 3.7 1.53.97.98 1.52 2.31 1.52 3.69 0 1.39-.55 2.72-1.52 3.71l-7.77 7.78q-.15.135-.33.21c-.12.05-.25.08-.38.08"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgHeart)
const Memo = memo(ForwardRef)
export default Memo
