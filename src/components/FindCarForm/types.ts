export enum ActionType {
  UPDATE_TITLE = 'UPDATE_TITLE',
  UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION',
  UPDATE_PHONE = 'UPDATE_PHONE',
  UPDATE_START_YEAR = 'UPDATE_START_YEAR',
  UPDATE_END_YEAR = 'UPDATE_END_YEAR',
  UPDATE_START_PRICE = 'UPDATE_START_PRICE',
  UPDATE_END_PRICE = 'UPDATE_END_PRICE',
}

export interface IOrderState {
  title: string
  description: string
  phone: string
  start_year: number
  end_year: number
  start_price: number
  end_price: number
}

export interface IAction {
  type: ActionType
  payload: any // eslint-disable-line
}

export const initialOrderState = {
  title: '',
  description: '',
  phone: '',
  start_year: 2000,
  end_year: 2024,
  start_price: 0,
  end_price: 0,
}

export const reducer = (state: IOrderState, action: IAction): IOrderState => {
  switch (action.type) {
    case ActionType.UPDATE_TITLE:
      return { ...state, title: action.payload }
    case ActionType.UPDATE_DESCRIPTION:
      return { ...state, description: action.payload }
    case ActionType.UPDATE_PHONE:
      return { ...state, phone: action.payload }
    case ActionType.UPDATE_START_YEAR:
      return { ...state, start_year: action.payload }
    case ActionType.UPDATE_END_YEAR:
      return { ...state, end_year: action.payload }
    case ActionType.UPDATE_START_PRICE:
      return { ...state, start_price: action.payload }
    case ActionType.UPDATE_END_PRICE:
      return { ...state, end_price: action.payload }
    default:
      return state
  }
}
