import CarInfo from './CarInfo/CarInfo'
import TelegramLogo from '../../assets/telegram.svg?react'
import './CarSingle.scss'
import RecommendedCars from './RecommendedCars/RecommendedCars'
import { ICar } from '../Catalog/types'
import CustomSlider from '../Shared/CustomSlider/CustomSlider'
interface ICarSingleProps {
  id: number
  account: {
    first_name: string
    last_name: string
    email: string
    phone: string
    telegram_id: string
  }
  brand: {
    id: number
    name: string
  }
  model: {
    id: number
    name: string
  }
  age: number
  generation: {
    id: number
    name: string
  }
  mileage: number
  attachments: { id: number; path: string; full_url: string; type: string }[]
  price: number
  vin_number: string
  title: string
  description: string
  dealer: string
  relatedCars: ICar[]
}

const CarSingle = ({
  account,
  brand,
  model,
  generation,
  age,
  price,
  mileage,
  title,
  dealer,
  description,
  vin_number,
  attachments,
  relatedCars,
}: ICarSingleProps) => {
  console.log(attachments)
  return (
    <div className='car-single'>
      <RecommendedCars cars={relatedCars} />
      <div className='car-single__main'>
        {attachments?.length ? <CustomSlider media={attachments} /> : ''}
        {/* <img
            className='car-single__image'
            src={attachments?.length ? attachments[0]?.full_url : ''}
            alt=''
          /> */}
        <div className='car-single__title'>{title}</div>
        <div className='car-single__vendor-wrapper'>
          <span className='car-single__vendor'>
            {account?.first_name} {account?.last_name}
          </span>
          <div className='car-single__price'>{price}$</div>
        </div>
        <p className='car-single__description'>{description}</p>
      </div>
      <div className='car-single__specs-wrapper'>
        <span className='car-single__specs-title'>Car specifications</span>
        <div className='car-single__info-wrapper'>
          <CarInfo
            brand={brand}
            model={model}
            generation={generation}
            age={age}
            mileage={mileage}
            dealer={dealer}
            vin={vin_number}
          />
        </div>
        <a className='car-single__contact-link' href='https://t.me/us_vans'>
          <TelegramLogo className='car-single__contact-icon' /> Contact us
        </a>
      </div>
    </div>
  )
}

export default CarSingle
