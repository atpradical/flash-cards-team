import { useEffect, useState } from 'react'

import { Progress } from '@/components/ui/progress'
import { Layout } from '@/shared/ui/layout'

import { CardsHeader } from './components/ui/cards-header'

export function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Layout>
      <CardsHeader isAuthorized />
      <Progress value={progress} />
    </Layout>
  )
}
