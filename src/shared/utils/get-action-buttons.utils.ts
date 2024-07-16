import { ACTIONS, VARIANT } from '@/shared/enums'
import { ActionButton } from '@/shared/types/common'

export function getActionButtons(tools: ActionButton[], showTools: VARIANT) {
  switch (showTools) {
    case VARIANT.NONE:
      return []
    case VARIANT.ONLY_LEARN:
      return tools.filter(el => el.label === ACTIONS.LEARN || el.label === ACTIONS.FAVORITE)
    case VARIANT.ONLY_EDITS:
      return tools.filter(el => el.label !== ACTIONS.LEARN && el.label !== ACTIONS.FAVORITE)
    default:
      return tools
  }
}
