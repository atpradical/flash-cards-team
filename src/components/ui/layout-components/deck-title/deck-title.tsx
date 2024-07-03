import { SettingsDropdown } from '@/components/ui/layout-components'
import { Image, Typography } from '@/components/ui/primitives'
import { RATIO } from '@/shared/enums'
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
  }

  return (
    <div className={cn.container}>
      <FlexContainer gap={'8px'}>
        <Typography as={'h1'} variant={'h1'}>
          {title}
        </Typography>
        <SettingsDropdown onDelete={onDelete} onEdit={onEdit} />
      </FlexContainer>
      {image && <Image alt={imgDescription} ratio={RATIO.M} src={image} variant={'m'} />}
    </div>
  )
}
