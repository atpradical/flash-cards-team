import { Ref, SVGProps, forwardRef, memo } from 'react'

const Checked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2m0 1.5c4.703 0 8.5 3.797 8.5 8.5s-3.797 8.5-8.5 8.5A8.49 8.49 0 0 1 3.5 12c0-4.703 3.797-8.5 8.5-8.5m4.248 5.48a.75.75 0 0 0-.516.227L11 13.937l-2.725-2.722a.75.75 0 1 0-1.06 1.06l3.254 3.256a.75.75 0 0 0 1.062 0l5.262-5.263a.75.75 0 0 0-.545-1.288'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(Checked)
const Memo = memo(ForwardRef)

export default Memo
