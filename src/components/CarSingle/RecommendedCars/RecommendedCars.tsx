import CatalogItem from '../../Catalog/CatalogList/CatalogItem/CatalogItem'
import { ICar } from '../../Catalog/types'

import './RecommendedCars.scss'

interface IRecommendedCarsProps {
  cars: ICar[]
}

const RecommendedCars = ({ cars }: IRecommendedCarsProps) => {
  return (
    <ul className='recommended-cars'>
      {cars?.map((car) => (
        <CatalogItem
          key={car.id}
          id={car.id}
          price={car.price}
          image={
            car.attachments.find((attachment) => attachment.type === 'image')
              ?.full_url || ''
          }
          brand={car.brand.name}
          model={car.model.name}
          year={car.age}
          generation={car.generation?.name}
          mileage={car.mileage}
          vin={car.vin_number}
        />
      ))}
    </ul>
  )
}

export default RecommendedCars
