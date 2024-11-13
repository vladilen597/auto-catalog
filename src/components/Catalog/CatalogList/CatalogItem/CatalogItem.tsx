import { Link } from 'react-router-dom'
import './CatalogItem.scss'

interface ICatalogItemProps {
  id: number
  price: number
  image: string
  brand: string
  model: string
  year: number
  generation: string
  mileage: number
  vin: string
}

const CatalogItem = ({
  id,
  price,
  image,
  brand,
  model,
  year,
  generation,
  mileage,
  vin,
}: ICatalogItemProps) => {
  return (
    <li className='catalog-item'>
      <Link to={`/catalog/${id}`} className='catalog-item__link'>
        <span className='catalog-item__car-name'>{price}$</span>
        <img
          src={image}
          height={200}
          alt={brand}
          className='catalog-item__image'
        />
        <div className='catalog-item__info'>
          <h3 className='catalog-item__item-name'>
            {brand} {model}
          </h3>
          <div className='catalog-item__info-grid'>
            <span className='catalog-item__line'>Year:</span>
            <span className='catalog-item__line'>{year}</span>
            <span className='catalog-item__line'>Generation:</span>
            <span className='catalog-item__line'>{generation}</span>
            <span className='catalog-item__line'>Mileage:</span>
            <span className='catalog-item__line'>{mileage} mi</span>
            <span className='catalog-item__line'>VIN:</span>
            <span className='catalog-item__line'>{vin}</span>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default CatalogItem
