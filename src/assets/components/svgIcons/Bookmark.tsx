import { Ref, SVGProps, forwardRef, memo } from 'react'

const Bookmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'bookmark_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#bookmark_svg__a)'}>
      <path
        d={
          'M6 21c-.18-.01-.35-.05-.5-.13-.15-.09-.28-.22-.37-.37A1 1 0 0 1 5 20V5.33c-.02-.6.2-1.19.62-1.62.41-.44.98-.69 1.58-.71h9.59c.6.02 1.17.27 1.58.71.42.43.64 1.02.63 1.62V20c-.01.17-.05.34-.14.49s-.21.28-.36.37c-.16.08-.33.13-.5.13-.18 0-.35-.05-.5-.13l-5.67-3.21-5.33 3.2c-.16.09-.33.14-.5.15'
        }
        fill={'currentColor'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(Bookmark)
const Memo = memo(ForwardRef)

export default Memo
