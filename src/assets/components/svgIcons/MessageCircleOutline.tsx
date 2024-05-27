import { Ref, SVGProps, forwardRef, memo } from 'react'

const MessageCircleOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <clipPath id={'message-circle-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} fillOpacity={0} />
      </clipPath>
    </defs>
    <path d={'M0 0h24v24H0z'} fill={'none'} />
    <g clipPath={'url(#message-circle-outline_svg__a)'} fill={'currentColor'}>
      <path
        d={
          'M13 12c0 .55-.45 1-1 1-.56 0-1-.45-1-1 0-.56.44-1 1-1 .55 0 1 .44 1 1M17 12c0 .55-.45 1-1 1-.56 0-1-.45-1-1 0-.56.44-1 1-1 .55 0 1 .44 1 1M9 12c0 .55-.45 1-1 1-.56 0-1-.45-1-1 0-.56.44-1 1-1 .55 0 1 .44 1 1'
        }
        fillRule={'evenodd'}
      />
      <path
        d={
          'M19.07 4.93a10 10 0 0 0-6.13-2.91 9.94 9.94 0 0 0-6.57 1.67 10.02 10.02 0 0 0-4 5.47c-.65 2.23-.51 4.63.42 6.77.09.19.12.42.09.64L2 20.8c-.04.16-.03.33.02.48a.94.94 0 0 0 .58.64c.13.05.26.08.4.08h.2l4.28-.86c.21-.03.43 0 .64.09 2.13.92 4.53 1.06 6.76.41a10.02 10.02 0 0 0 5.47-4 9.94 9.94 0 0 0 1.67-6.57c-.23-2.32-1.25-4.48-2.9-6.12zm.83 8.36c-.2 1.19-.66 2.32-1.36 3.31s-1.61 1.81-2.67 2.39c-1.06.59-2.24.93-3.44.99-1.21.07-2.42-.15-3.54-.61a3.13 3.13 0 0 0-1.8-.21l-2.82.57.57-2.82c.11-.62.04-1.25-.21-1.81a8 8 0 0 1-.62-3.54c.06-1.2.4-2.38.99-3.44.58-1.06 1.4-1.97 2.39-2.67s2.12-1.16 3.32-1.35c1.25-.21 2.53-.12 3.74.27a8.01 8.01 0 0 1 5.17 5.17c.39 1.21.48 2.49.28 3.75'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(MessageCircleOutline)
const Memo = memo(ForwardRef)

export default Memo
