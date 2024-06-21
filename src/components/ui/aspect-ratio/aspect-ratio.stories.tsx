import type { Meta } from '@storybook/react'

import { AspectRatio } from '@/components/ui/aspect-ratio/aspect-ratio'

const meta = {
  component: AspectRatio,
  tags: ['autodocs'],
  title: 'Components/AspectRatio',
} satisfies Meta<typeof AspectRatio>

export default meta
const image = {
  alt: 'Image',
  src: 'src/assets/webp/react-logo.webp',
}

// export const AspectRatioBase = {
//   render: () => {
//     return (
//       <AspectRatio size={118 / 48}>
//         <img alt={image.alt} src={image.src} />
//       </AspectRatio>
//     )
//   },
// }
export const AspectRatioBase = {
  render: () => {
    return (
      <div>
        <AspectRatio ratio={20}>
          <img
            alt={image.alt}
            className={'rounded-md object-cover'}
            src={image.src}
            style={{ width: '100px' }}
          />
        </AspectRatio>
      </div>
    )
  },
}
