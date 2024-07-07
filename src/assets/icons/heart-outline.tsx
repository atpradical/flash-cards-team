import { Ref, SVGProps, forwardRef, memo } from 'react'

const HeartOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'heart-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#heart-outline_svg__a)'}>
      <path
        d={
          'M12 21c-.14 0-.27-.03-.39-.08a1 1 0 0 1-.32-.21l-7.78-7.78a5.3 5.3 0 0 1-1.52-3.71c0-1.38.55-2.71 1.52-3.69A5.27 5.27 0 0 1 7.22 4c1.38 0 2.71.55 3.7 1.53L12 6.61l1.08-1.08A5.23 5.23 0 0 1 16.78 4c1.38 0 2.71.55 3.7 1.53.97.98 1.52 2.31 1.52 3.69 0 1.39-.55 2.72-1.52 3.71l-7.77 7.78q-.15.135-.33.21c-.12.05-.25.08-.38.08M7.22 6c-.43-.01-.85.08-1.24.24s-.75.4-1.05.7c-.6.6-.94 1.42-.94 2.28s.34 1.68.94 2.29L12 18.58l7.06-7.07c.6-.61.94-1.43.94-2.29s-.34-1.68-.94-2.28c-.62-.59-1.44-.91-2.28-.91-.85 0-1.67.32-2.28.91l-1.79 1.8q-.15.135-.33.21c-.12.05-.25.08-.38.08-.14 0-.27-.03-.39-.08a1 1 0 0 1-.32-.21L9.5 6.94c-.3-.3-.66-.54-1.05-.7S7.64 5.99 7.22 6'
        }
        fill={'currentColor'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(HeartOutline)
const Memo = memo(ForwardRef)

export default Memo
