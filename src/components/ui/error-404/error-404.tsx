import { ASPECT_RATIO } from '@/common/enums/aspect-ratio'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export const Error404 = () => {
  return (
    <AspectRatio ratio={ASPECT_RATIO.Large} variant={'xl'}>
      {/*<Error404Outline />*/}
    </AspectRatio>
  )
}
