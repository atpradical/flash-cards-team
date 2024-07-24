import { useEffect, useState } from 'react'

export const useCurrentScreenWidth = () => {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setCurrentScreenWidth(window.innerWidth)

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return currentScreenWidth
}
