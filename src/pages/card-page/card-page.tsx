import { Link } from 'react-router-dom'

import ArrowBackOutline from '@/assets/components/svgIcons/ArrowBackOutline'
import { LearnCard } from '@/components/ui/layout-components'
import { Button, Progress } from '@/components/ui/primitives'
import { useGetCardQuery } from '@/services/flashcards-api'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'
import clsx from 'clsx'

import s from './card-page.module.scss'

export const CardPage = () => {
  const cn = {
    goBack: clsx(s.goBack),
    icon: clsx(s.icon),
  }
  const { data, isError, isLoading } = useGetCardQuery({ id: 'clx01zfvb02aoo501mc48281l' })

  console.log(data)
  if (isLoading) {
    return <Progress />
  }

  return (
    <Page>
      <FlexContainer fd={'column'} gap={'36px'} jc={'left'} pd={'0 20px'}>
        <Button as={Link} className={cn.goBack} to={PATH.DECK} variant={'link'}>
          <ArrowBackOutline className={cn.icon} />
          Back to Deck
        </Button>
        <FlexContainer jc={'center'}>
          <LearnCard
            answer={'Венера'}
            deckName={'Солнечная система'}
            question={'Самая горячая планета?'}
          />
        </FlexContainer>
      </FlexContainer>
    </Page>
  )
}

// {
//   "pagination": {
//   "totalPages": 2,
//       "currentPage": 1,
//       "itemsPerPage": 10,
//       "totalItems": 14
// },
//   "items": [
//   {
//     "answer": "NOTCOIN",
//     "answerImg": null,
//     "answerVideo": null,
//     "created": "2024-06-04T07:03:16.248Z",
//     "deckId": "clx01gzjm02a6o501uu56riqi",
//     "grade": 0,
//     "id": "clx01zfvb02aoo501mc48281l",
//     "question": "Как называется эта монета?",
//     "questionImg": "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/30f63809-5350-4661-a04e-2ed21dffaaac_notcoin.png",
//     "questionVideo": null,
//     "shots": 0,
//     "updated": "2024-07-02T12:23:57.840Z",
//     "userId": "c7b0a48b-e6b0-4def-8c38-dbe349ce7478"
//   },
//   {
//     "answer": "LITECOIN",
//     "answerImg": null,
//     "answerVideo": null,
//     "created": "2024-06-04T07:00:20.271Z",
//     "deckId": "clx01gzjm02a6o501uu56riqi",
//     "grade": 3,
//     "id": "clx01vo3302aco5011wvcp14v",
//     "question": "Как называется эта монета?",
//     "questionImg": "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/3afbe937-764a-4ff3-a2e5-a1f08e6878e4_litecoin.png",
//     "questionVideo": null,
//     "shots": 1,
//     "updated": "2024-06-29T12:13:26.675Z",
//     "userId": "c7b0a48b-e6b0-4def-8c38-dbe349ce7478"
//   },
//   {
//     "answer": "ETHEREUM",
//     "answerImg": null,
//     "answerVideo": null,
//     "created": "2024-06-04T07:02:09.890Z",
//     "deckId": "clx01gzjm02a6o501uu56riqi",
//     "grade": 0,
//     "id": "clx01y0o202ajo50115ewmf1p",
//     "question": "Как называется эта монета?",
//     "questionImg": "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/8f063fe3-128e-4881-8e37-506433cb6e5c_etherium.png",
//     "questionVideo": null,
//     "shots": 0,
//     "updated": "2024-06-28T17:50:17.405Z",
//     "userId": "c7b0a48b-e6b0-4def-8c38-dbe349ce7478"
//   },
//   {
//     "answer": "RIPPLE",
//     "answerImg": null,
//     "answerVideo": null,
//     "created": "2024-06-04T07:01:04.304Z",
//     "deckId": "clx01gzjm02a6o501uu56riqi",
//     "grade": 0,
//     "id": "clx01wm2802afo5019i2y8wep",
//     "question": "Как называется эта монета?",
//     "questionImg": "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/fc16db13-c083-4306-8029-c2f85b176088_xrp.png",
//     "questionVideo": null,
//     "shots": 0,
//     "updated": "2024-06-28T17:50:09.267Z",
//     "userId": "c7b0a48b-e6b0-4def-8c38-dbe349ce7478"
//   },
//   {
//     "answer": "CARDANO",
//     "answerImg": null,
//     "answerVideo": null,
//     "created": "2024-06-04T07:00:50.224Z",
//     "deckId": "clx01gzjm02a6o501uu56riqi",
//     "grade": 0,
//     "id": "clx01wb7402aeo501ik2v4la3",
//     "question": "Как называется эта монета?",
//     "questionImg": "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/f70c543d-2346-404d-8546-0d87b1bbfc62_cardano.webp",
//     "questionVideo": null,
//     "shots": 0,
//     "updated": "2024-06-28T17:47:00.562Z",
//     "userId": "c7b0a48b-e6b0-4def-8c38-dbe349ce7478"
//   },
//   {
//     "answer": "DOGE",
//     "answerImg": null,
//     "answerVideo": null,
//     "created": "2024-06-04T07:01:39.760Z",
//     "deckId": "clx01gzjm02a6o501uu56riqi",
//     "grade": 0,
//     "id": "clx01xdf402aio501ji51823i",
//     "question": "Как называется эта монета?",
//     "questionImg": "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/7c7a30ba-58b1-49f9-97de-31d8f57bc088_doge.webp",
//     "questionVideo": null,
//     "shots": 0,
//     "updated": "2024-06-28T17:46:55.941Z",
//     "userId": "c7b0a48b-e6b0-4def-8c38-dbe349ce7478"
//   },
//   {
//     "answer": "BNB",
//     "answerImg": null,
//     "answerVideo": null,
//     "created": "2024-06-04T07:02:32.532Z",
//     "deckId": "clx01gzjm02a6o501uu56riqi",
//     "grade": 0,
//     "id": "clx01yi5002alo501ngkh5p74",
//     "question": "Как называется эта монета?",
//     "questionImg": "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/90a5d4a4-cd8d-4eb4-a735-184400ae4b27_bnb.png",
//     "questionVideo": null,
//     "shots": 0,
//     "updated": "2024-06-28T17:46:45.586Z",
//     "userId": "c7b0a48b-e6b0-4def-8c38-dbe349ce7478"
//   },
//   {
//     "answer": "AVALANCHE",
//     "answerImg": null,
//     "answerVideo": null,
//     "created": "2024-06-04T07:02:47.634Z",
//     "deckId": "clx01gzjm02a6o501uu56riqi",
//     "grade": 3,
//     "id": "clx01ytsi02amo50121ekqlwb",
//     "question": "Как называется эта монета?",
//     "questionImg": "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/1058ccff-69e3-4b86-b1e9-f012d571afe5_avalanche.png",
//     "questionVideo": null,
//     "shots": 1,
//     "updated": "2024-06-26T13:10:51.389Z",
//     "userId": "c7b0a48b-e6b0-4def-8c38-dbe349ce7478"
//   },
//   {
//     "answer": "SHIBA INU",
//     "answerImg": null,
//     "answerVideo": null,
//     "created": "2024-06-04T07:00:08.016Z",
//     "deckId": "clx01gzjm02a6o501uu56riqi",
//     "grade": 5,
//     "id": "clx01vemo02abo501ww7be4ll",
//     "question": "Как называется эта монета?",
//     "questionImg": "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/3db88cda-44f5-4339-b546-4b7011c3bbc2_shiba.png",
//     "questionVideo": null,
//     "shots": 1,
//     "updated": "2024-06-20T15:07:28.986Z",
//     "userId": "c7b0a48b-e6b0-4def-8c38-dbe349ce7478"
//   },
//   {
//     "answer": "SOLANA",
//     "answerImg": null,
//     "answerVideo": null,
//     "created": "2024-06-04T07:01:15.386Z",
//     "deckId": "clx01gzjm02a6o501uu56riqi",
//     "grade": 0,
//     "id": "clx01wum202ago5010z6bpkjv",
//     "question": "Как называется эта монета?",
//     "questionImg": "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/3bf18f3e-cea8-4db9-bffe-96475b38148e_solana.png",
//     "questionVideo": null,
//     "shots": 0,
//     "updated": "2024-06-20T15:07:25.688Z",
//     "userId": "c7b0a48b-e6b0-4def-8c38-dbe349ce7478"
//   }
// ]
// }
