import { iconsList } from '@/components/ui/design-system/iconography/iconography.mock'

export const Iconography = () => {
  return <div>{iconsList.map(el => el.name)}</div>
}
