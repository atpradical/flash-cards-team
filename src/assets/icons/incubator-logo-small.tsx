import { Ref, SVGProps, forwardRef, memo } from 'react'

const IncubatorLogoSmall = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'36'}
    ref={ref}
    viewBox={'0 0 36 36'}
    width={'36'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M18 34.5c9.11 0 16.5-7.39 16.5-16.5 0-9.12-7.39-16.5-16.5-16.5C8.88 1.5 1.5 8.88 1.5 18c0 9.11 7.38 16.5 16.5 16.5m0 1.5c9.94 0 18-8.06 18-18 0-9.95-8.06-18-18-18C8.05 0 0 8.05 0 18c0 9.94 8.05 18 18 18'
      }
      fill={'#FFF'}
      fillRule={'evenodd'}
    />
    <path
      d={
        'M10.5 6.53c1.09 0 1.96.88 1.96 1.96s-.87 1.96-1.96 1.96c-1.08 0-1.96-.88-1.96-1.96s.88-1.96 1.96-1.96'
      }
      fill={'#F23D61'}
      fillRule={'evenodd'}
    />
    <path
      d={
        'M12.17 11.87H9.26v12.6h2.91zm14.55 12.6v-12.6h-2.88v7.65l-6.26-7.65h-2.41v12.6h2.88v-7.65l6.28 7.65z'
      }
      fill={'#FFF'}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(IncubatorLogoSmall)
const Memo = memo(ForwardRef)

export default Memo
