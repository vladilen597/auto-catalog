export enum DealerActionsTypes {
  UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME',
  UPDATE_LAST_NAME = 'UPDATE_LAST_NAME',
  UPDATE_EMAIL = 'UPDATE_EMAIL',
  UPDATE_PHONE = 'UPDATE_PHONE',
  UPDATE_TELEGRAM = 'UPDATE_TELEGRAM',
}

interface IDealerState {
  firstName: string
  lastName: string
  email: string
  phone: string
  telegram: string
}

interface DealerAction {
  type: DealerActionsTypes
  payload: any // eslint-disable-line
}

export const initialDealerState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  telegram: '',
}

export const reducerDealer = (
  state: IDealerState,
  action: DealerAction
): IDealerState => {
  switch (action.type) {
    case DealerActionsTypes.UPDATE_FIRST_NAME: {
      return { ...state, firstName: action.payload }
    }
    case DealerActionsTypes.UPDATE_LAST_NAME: {
      return { ...state, lastName: action.payload }
    }
    case DealerActionsTypes.UPDATE_EMAIL: {
      return { ...state, email: action.payload }
    }
    case DealerActionsTypes.UPDATE_PHONE: {
      return { ...state, phone: action.payload }
    }
    case DealerActionsTypes.UPDATE_TELEGRAM: {
      return { ...state, telegram: action.payload }
    }
    default:
      return state
  }
}
