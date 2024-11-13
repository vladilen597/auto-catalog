export enum CarActionsTypes {
  UPDATE_TITLE = 'UPDATE_TITLE',
  UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION',
  UPDATE_PRICE = 'UPDATE_PRICE',
  UPDATE_BRAND = 'UPDATE_BRAND',
  UPDATE_MODEL = 'UPDATE_MODEL',
  UPDATE_GENERATION = 'UPDATE_GENERATION',
  UPDATE_MILEAGE = 'UPDATE_MILEAGE',
  UPDATE_AGE = 'UPDATE_AGE',
  UPDATE_DEALER = 'UPDATE_DEALER',
  UPDATE_VIN = 'UPDATE_VIN',
  UPDATE_MEDIA = 'UPDATE_MEDIA',
}

interface ICarState {
  title: string
  description: string
  price: number
  brand: { id: number; name: string }
  model: { id: number; name: string; model_code: string }
  generation: { id: number; name: string }
  mileage: number
  age: number
  dealer: string
  vin: string
  media: any[] // eslint-disable-line
}

interface CarAction {
  type: CarActionsTypes
  payload: any // eslint-disable-line
}

export const initialCarState = {
  title: '',
  description: '',
  price: 0,
  brand: { id: 0, name: '' },
  model: { id: 0, name: '', model_code: '' },
  generation: { id: 0, name: '' },
  mileage: 0,
  age: 2024,
  dealer: '',
  vin: '',
  media: [],
}

export const reducerCar = (state: ICarState, action: CarAction): ICarState => {
  switch (action.type) {
    case CarActionsTypes.UPDATE_TITLE: {
      return { ...state, title: action.payload }
    }
    case CarActionsTypes.UPDATE_DESCRIPTION: {
      return { ...state, description: action.payload }
    }
    case CarActionsTypes.UPDATE_PRICE: {
      return { ...state, price: action.payload }
    }
    case CarActionsTypes.UPDATE_BRAND: {
      return { ...state, brand: action.payload }
    }
    case CarActionsTypes.UPDATE_MODEL: {
      return { ...state, model: action.payload }
    }
    case CarActionsTypes.UPDATE_GENERATION: {
      return { ...state, generation: action.payload }
    }
    case CarActionsTypes.UPDATE_MILEAGE: {
      return { ...state, mileage: action.payload }
    }
    case CarActionsTypes.UPDATE_AGE: {
      return { ...state, age: action.payload }
    }
    case CarActionsTypes.UPDATE_DEALER: {
      return { ...state, dealer: action.payload }
    }
    case CarActionsTypes.UPDATE_VIN: {
      return { ...state, vin: action.payload }
    }
    case CarActionsTypes.UPDATE_MEDIA: {
      return { ...state, media: action.payload }
    }
    default:
      return state
  }
}
