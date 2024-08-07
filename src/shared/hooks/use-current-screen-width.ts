import { useCallback, useEffect, useState } from 'react'

export const useCurrentScreenWidth = () => {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(window.innerWidth)

  const handleWindowResize = useCallback(() => setCurrentScreenWidth(window.innerWidth), [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [handleWindowResize])

  return currentScreenWidth
}
