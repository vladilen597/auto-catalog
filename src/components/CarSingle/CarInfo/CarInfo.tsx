import './CarInfo.scss'

interface ICarInfoProps {
  brand: {
    id: number
    name: string
  }
  model: {
    id: number
    name: string
  }
  generation: {
    id: number
    name: string
  }
  age: number
  mileage: number
  dealer: string
  vin: string
}

const CarInfo = ({
  brand,
  model,
  generation,
  age,
  mileage,
  dealer,
  vin,
}: ICarInfoProps) => {
  return (
    <ul className='car-info'>
      <li className='car-info__item'>
        <span className='car-info__item-name'>Brand</span>
        <span className='car-info__item-value'>{brand?.name}</span>
      </li>
      <li className='car-info__item'>
        <span className='car-info__item-name'>Model</span>
        <span className='car-info__item-value'>{model?.name}</span>
      </li>
      <li className='car-info__item'>
        <span className='car-info__item-name'>Generation</span>
        <span className='car-info__item-value'>{generation?.name}</span>
      </li>
      <li className='car-info__item'>
        <span className='car-info__item-name'>Dealer</span>
        <span className='car-info__item-value'>{dealer}</span>
      </li>
      <li className='car-info__item'>
        <span className='car-info__item-name'>Year</span>
        <span className='car-info__item-value'>{age}</span>
      </li>
      <li className='car-info__item'>
        <span className='car-info__item-name'>Mileage</span>
        <span className='car-info__item-value'>{mileage} mi.</span>
      </li>
      <li className='car-info__item'>
        <span className='car-info__item-name'>VIN</span>
        <span className='car-info__item-value'>{vin}</span>
      </li>
    </ul>
  )
}

export default CarInfo
