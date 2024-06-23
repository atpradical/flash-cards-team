import { ACTIONS, VARIANT } from '@/shared/enums/enums'

import { ActionButton } from '../actions'

export function getActionButtons(tools: ActionButton[], showTools: VARIANT) {
  if (showTools === VARIANT.ONLY_LEARN) {
    return tools.filter(el => el.label === ACTIONS.LEARN)
  } else if (showTools === VARIANT.ONLY_EDITS) {
    return tools.filter(el => el.label !== ACTIONS.LEARN)
  }

  return tools
}
