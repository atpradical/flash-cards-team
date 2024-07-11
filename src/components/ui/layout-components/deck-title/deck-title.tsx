import dummyCover from '@/assets/webp/dummy-cover.webp'
import { Nullable } from '@/common/types'
import { SettingsDropdown } from '@/components/ui/layout-components'
import { Image, Typography } from '@/components/ui/primitives'
import { RATIO } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './deck-title.styles'

type DeckTitleProps = {
  cover: Nullable<string>
  learnDeckPath: string
  onDelete: () => void
  onEdit: () => void
  title: string
}

export const DeckTitle = ({ cover, learnDeckPath, onDelete, onEdit, title }: DeckTitleProps) => {
  cover ??= dummyCover

  return (
    <div className={cn.container}>
      <FlexContainer gap={'8px'}>
        <Typography as={'h1'} variant={'h1'}>
          {title}
        </Typography>
        <SettingsDropdown learnDeckPath={learnDeckPath} onDelete={onDelete} onEdit={onEdit} />
      </FlexContainer>
      <Image alt={'Deck cover image'} ratio={RATIO.M} src={cover} variant={'m'} />
    </div>
  )
}
