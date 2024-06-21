import { AspectRatio } from '@/components/ui/aspect-ratio'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'
import { Layout } from '@/shared/ui/layout'
import { Page } from '@/shared/ui/page'

export function App() {
  // just mockedFunction, will be deleted later.
  const foo = (value: any) => {
    console.log(value)
  }
  const image = {
    alt: 'Image',
    src: 'src/assets/webp/react-logo.webp',
  }

  return (
    <Layout>
      <Header />
      <Page>
        <FlexContainer gap={'10px'} jc={'center'}>
          <AspectRatio ratio={16 / 10}>
            <img alt={image.alt} src={image.src} />
          </AspectRatio>
        </FlexContainer>
      </Page>
    </Layout>
  )
}
