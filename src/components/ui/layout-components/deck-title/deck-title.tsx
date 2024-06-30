import { ASPECT_RATIO } from '@/common/enums/aspect-ratio'
import { SettingsDropdown } from '@/components/ui/layout-components'
import { AspectRatio, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './deck-title.module.scss'

type DeckTitleProps = {
  image: string
  imgDescription?: string
  onDelete: () => void
  onEdit: () => void
  title: string
}

export const DeckTitle = ({
  image,
  imgDescription = 'Deck cover image',
  onDelete,
  onEdit,
  title,
}: DeckTitleProps) => {
  const cn = {
    container: clsx(s.container),
    image: clsx(s.image),
  }

  return (
    <div className={cn.container}>
      <FlexContainer>
        <Typography as={'h1'} variant={'h1'}>
          {title}
        </Typography>
        <SettingsDropdown onDelete={onDelete} onEdit={onEdit} />
      </FlexContainer>
      {image && (
        <AspectRatio ratio={ASPECT_RATIO.Standard} variant={'m'}>
          <img alt={imgDescription} className={cn.image} src={image} />
        </AspectRatio>
      )}
    </div>
  )
}
