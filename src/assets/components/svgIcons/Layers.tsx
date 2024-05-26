import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgLayers = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="layers_svg__a">
        <path fill="currentColor" fillOpacity={0} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor" clipPath="url(#layers_svg__a)">
      <path d="m3.23 7.29 8.53 4.63c.07.03.15.06.24.06.08 0 .16-.03.24-.06l8.52-4.63c.07-.04.14-.1.18-.18.04-.07.06-.16.06-.25a.54.54 0 0 0-.09-.24.4.4 0 0 0-.2-.14L12.19 3a.42.42 0 0 0-.38 0L3.28 6.48c-.08.02-.15.08-.2.14-.05.07-.08.16-.09.24 0 .09.02.18.06.25.04.08.11.14.18.18" />
      <path d="m20.71 10.66-1.84-.78-6.63 3.61c-.08.03-.16.06-.24.06-.09 0-.17-.03-.24-.06L5.12 9.88l-1.83.78a.45.45 0 0 0-.19.17c-.05.08-.07.16-.07.25s.02.17.07.25c.04.07.11.13.19.18l8.52 4.9q.105.06.24.06.12 0 .24-.06l8.52-4.9c.07-.05.13-.12.16-.2.04-.08.06-.17.05-.26a.5.5 0 0 0-.1-.24.5.5 0 0 0-.21-.15" />
      <path d="m20.71 15.1-1.56-.68-6.91 3.76c-.08.03-.16.06-.24.06-.09 0-.17-.03-.24-.06l-6.92-3.76-1.56.68a.54.54 0 0 0-.19.18.5.5 0 0 0-.07.25c0 .09.03.18.07.25.05.08.12.14.19.19l8.53 5c.07.03.15.06.24.06.08 0 .16-.03.24-.06l8.52-5a.5.5 0 0 0 .17-.21c.04-.08.05-.17.04-.26a.46.46 0 0 0-.1-.25.45.45 0 0 0-.21-.15" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgLayers)
const Memo = memo(ForwardRef)
export default Memo
