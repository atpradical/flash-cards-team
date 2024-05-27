import { Ref, SVGProps, forwardRef, memo } from 'react'

const PaperPlane = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'paper-plane_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#paper-plane_svg__a)'}>
      <path
        d={
          'M21 3.99c-.02-.09-.04-.18-.06-.26v-.1c-.05-.11-.12-.21-.2-.3-.09-.07-.19-.14-.29-.19h-.09a.9.9 0 0 0-.32-.15H20c-.1-.01-.21-.01-.3 0l-18.01 6c-.2.07-.37.2-.49.37-.13.17-.19.37-.19.58 0 .22.06.42.19.59.12.17.29.3.49.37l8.53 2.84 2.85 8.53c.06.2.19.37.36.49.17.13.37.19.59.19.21 0 .41-.06.58-.19.17-.12.3-.29.37-.49l6-18.01q.03-.12.03-.27m-4.71 2.29-5.56 5.58-5.58-1.87zM14 18.84l-1.86-5.57 5.56-5.58z'
        }
        fill={'currentColor'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(PaperPlane)
const Memo = memo(ForwardRef)

export default Memo
