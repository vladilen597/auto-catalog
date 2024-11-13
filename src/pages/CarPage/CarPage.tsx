import { useParams } from 'react-router-dom'
import Page from '../../components/Page/Page'
import CarSingle from '../../components/CarSingle/CarSingle'
import { useQuery } from '@tanstack/react-query'
import { instance } from '../../utils/api'

import './CarPage.scss'

const CarPage = () => {
  const { id } = useParams()

  const { data: car } = useQuery({
    queryFn: async () => {
      const { data } = await instance.get(`/ad/${id}`)
      return data.data
    },
    queryKey: ['car', id],
  })

  const { data: relatedCars } = useQuery({
    queryFn: async () => {
      const { data } = await instance.get(`/ad/${id}/recommended`)
      return data.data
    },
    queryKey: ['related-cars', id],
  })

  return (
    <Page>
      {/* <div className='car-page__wrapper'> */}
      {/* <div className='car-page__related'>
          <span className='car-page__related-title'>Related offers</span>
          <div className='car-page__related-wrapper'>
            <RecommendedCars cars={relatedCars} />
          </div>
        </div> */}
      <CarSingle {...car} relatedCars={relatedCars} />
      {/* </div> */}
    </Page>
  )
}

export default CarPage
