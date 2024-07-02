import { ACTIONS, VARIANT } from '@/shared/enums'

import { ActionButton } from '../actions'

// todo: move util function to common according to FSD later.
// todo: function is expected to be reused in DropDown component.
export function getActionButtons(tools: ActionButton[], showTools: VARIANT) {
  if (showTools === VARIANT.ONLY_LEARN) {
    return tools.filter(el => el.label === ACTIONS.LEARN)
  } else if (showTools === VARIANT.ONLY_EDITS) {
    return tools.filter(el => el.label !== ACTIONS.LEARN)
  }

  return tools
}
