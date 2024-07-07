import { Ref, SVGProps, forwardRef, memo } from 'react'

const PlusSquare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'plus-square_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#plus-square_svg__a)'}>
      <path
        d={
          'M18 3H6c-.8 0-1.56.31-2.13.87C3.31 4.44 3 5.2 3 6v12c0 .79.31 1.55.87 2.12.57.56 1.33.88 2.13.88h12c.79 0 1.55-.32 2.12-.88.56-.57.88-1.33.88-2.12V6c0-.8-.32-1.56-.88-2.13C19.55 3.31 18.79 3 18 3m-3 10h-2v2c0 .26-.11.51-.3.7s-.44.3-.7.3a1 1 0 0 1-.71-.3.98.98 0 0 1-.29-.7v-2H9a1 1 0 0 1-.71-.3A.98.98 0 0 1 8 12a.99.99 0 0 1 1-1h2V9a.99.99 0 0 1 1-1c.26 0 .51.1.7.29A1 1 0 0 1 13 9v2h2c.26 0 .51.1.7.29a1 1 0 0 1 .3.71c0 .26-.11.51-.3.7s-.44.3-.7.3'
        }
        fill={'currentColor'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(PlusSquare)
const Memo = memo(ForwardRef)

export default Memo
