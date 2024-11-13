import CatalogItem from './CatalogItem/CatalogItem'
import { ICar } from '../types'
import './CatalogList.scss'

const CatalogList = ({ items }: { items: ICar[] }) => {
  return (
    <ul className='catalog-list'>
      {items?.map((car: ICar) => (
        <CatalogItem
          key={car.id}
          id={car.id}
          price={car.price}
          image={
            car.attachments.find((attachment) => attachment.type === 'image')
              ?.full_url || ''
          }
          brand={car.brand?.name}
          model={car.model?.name}
          year={car.age}
          generation={car.generation?.name}
          mileage={car.mileage}
          vin={car.vin_number}
        />
      ))}
    </ul>
  )
}

export default CatalogList
