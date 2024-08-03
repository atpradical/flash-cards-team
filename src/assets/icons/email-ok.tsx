import { type SVGProps, memo } from 'react'

const SvgEmailOk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={'#40C057'}
    height={'1em'}
    viewBox={'0 0 48 48'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M24 4C12.972 4 4 12.972 4 24s8.972 20 20 20 20-8.972 20-20S35.028 4 24 4m0 3c9.407 0 17 7.593 17 17s-7.593 17-17 17S7 33.407 7 24 14.593 7 24 7m7.47 10.986a1.5 1.5 0 0 0-1.03.453l-8.94 8.94-3.94-3.94a1.5 1.5 0 1 0-2.12 2.122l5 5a1.5 1.5 0 0 0 2.12 0l10-10a1.5 1.5 0 0 0-1.09-2.575'
      }
    />
  </svg>
)
const Memo = memo(SvgEmailOk)

export default Memo
