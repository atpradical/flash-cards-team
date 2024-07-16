import { useSearchParams } from 'react-router-dom'

type SearchParams = Record<string, boolean | null | number | string | undefined>

export const useSearchParamUpdater = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  return (args: SearchParams) => {
    Object.keys(args).forEach(key => {
      const value = args[key]

      if (value !== undefined && value !== null && value !== '') {
        searchParams.set(key, String(value))
      } else {
        searchParams.delete(key)
      }
    })
    setSearchParams(searchParams)
  }
}
