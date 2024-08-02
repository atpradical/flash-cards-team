export function truncateString(string: string, maxLength: number) {
  return string.length > maxLength ? string.slice(0, maxLength) + '...' : string
}
