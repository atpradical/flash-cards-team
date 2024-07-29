export function combineLoadingStates(...states: boolean[]): boolean {
  return states.some(state => state)
}
