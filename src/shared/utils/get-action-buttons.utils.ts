import { ActionButton } from '@/components/ui/layout-components/actions'
import { ACTIONS, VARIANT } from '@/shared/enums'

export function getActionButtons(tools: ActionButton[], showTools: VARIANT) {
  switch (showTools) {
    case VARIANT.ALL:
      return tools
    case VARIANT.ONLY_LEARN:
      return tools.filter(el => el.label === ACTIONS.LEARN)
    case VARIANT.ONLY_EDITS:
      return tools.filter(el => el.label !== ACTIONS.LEARN && el.label !== ACTIONS.FAVORITE)
    default:
      return []
  }
}
