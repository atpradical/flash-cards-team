import { Ref, SVGProps, forwardRef, memo } from 'react'

const Image = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'image_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#image_svg__a)'} fill={'currentColor'}>
      <path
        d={
          'M18 3H6c-.8 0-1.56.31-2.13.87C3.31 4.44 3 5.2 3 6v12c0 .79.31 1.55.87 2.12.57.56 1.33.88 2.13.88h12c.79 0 1.55-.32 2.12-.88.56-.57.88-1.33.88-2.12V6c0-.8-.32-1.56-.88-2.13C19.55 3.31 18.79 3 18 3M6 5h12c.26 0 .51.1.7.29A1 1 0 0 1 19 6v8.36l-3.2-2.73a2.78 2.78 0 0 0-1.76-.64c-.65 0-1.27.23-1.76.64L5 17.7V6a.99.99 0 0 1 1-1'
        }
      />
      <path
        d={'M9.5 8.5c0 .82-.68 1.5-1.5 1.5-.83 0-1.5-.68-1.5-1.5C6.5 7.67 7.17 7 8 7c.82 0 1.5.67 1.5 1.5'}
        fillRule={'evenodd'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(Image)
const Memo = memo(ForwardRef)

export default Memo
