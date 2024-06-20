import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgCheckEmail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 96 96'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M48 96c26.5 0 48-21.5 48-48C96 21.49 74.5 0 48 0 21.49 0 0 21.49 0 48c0 26.5 21.49 48 48 48'
      }
      fill={'#8C61FF'}
      fillOpacity={0.05}
    />
    <path
      d={
        'M96 48c0 26.5-21.5 48-48 48C21.49 96 0 74.5 0 48 0 21.49 21.49 0 48 0c26.5 0 48 21.49 48 48M66.04 91.55Q57.73 95 48 95q-9.74 0-18.05-3.45-8.31-3.44-15.19-10.32T4.44 66.04 1 48q0-9.74 3.44-18.05t10.32-15.19T29.95 4.44 48 1q9.73 0 18.04 3.44t15.19 10.32 10.32 15.19Q95 38.26 95 48q0 9.73-3.45 18.04-3.44 8.31-10.32 15.19T66.04 91.55'
      }
      fill={'#BEA6FF'}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCheckEmail)
const Memo = memo(ForwardRef)

export default Memo
