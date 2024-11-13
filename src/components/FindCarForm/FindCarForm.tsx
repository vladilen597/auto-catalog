import ControlledTextarea from '../Shared/ControlledTextarea/ControlledTextarea'
import ControlledInput from '../Shared/ControlledInput/ControlledInput'
import { ActionType, initialOrderState, reducer } from './types'
import { useNavigate } from 'react-router-dom'
import { instance } from '../../utils/api'
import { toast } from 'react-toastify'
import { useReducer } from 'react'

import './FindCarForm.scss'

const FindCarForm = () => {
  const [order, dispatch] = useReducer(reducer, initialOrderState)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await instance.post('/search-ad', order)
      toast.success('Request successfully created')
      navigate('/catalog')
    } catch (error: unknown) {
      console.log(error)
      toast.error('Error while creating request')
    }
  }

  return (
    <form className='find-car-form' onSubmit={handleSubmit}>
      <span className='find-car-form__title'>Fill out the request form</span>
      <div className='find-car-form__inputs'>
        <ControlledInput
          title='Title'
          value={order.title}
          required
          onChange={(value) =>
            dispatch({ type: ActionType.UPDATE_TITLE, payload: value })
          }
        />
        <ControlledTextarea
          title='Description'
          value={order.description}
          required
          onChange={(value) =>
            dispatch({ type: ActionType.UPDATE_DESCRIPTION, payload: value })
          }
        />
        <ControlledInput
          title='Phone'
          value={order.phone}
          required
          onChange={(value) =>
            dispatch({ type: ActionType.UPDATE_PHONE, payload: value })
          }
        />
        <div className='find-car-form__group'>
          <ControlledInput
            title='Start year'
            value={order.start_year}
            required
            onChange={(value) =>
              dispatch({ type: ActionType.UPDATE_START_YEAR, payload: value })
            }
          />
          <ControlledInput
            title='End year'
            value={order.end_year}
            required
            onChange={(value) =>
              dispatch({ type: ActionType.UPDATE_END_YEAR, payload: value })
            }
          />
        </div>
        <div className='find-car-form__group'>
          <ControlledInput
            title='Start price'
            value={order.start_price}
            required
            onChange={(value) =>
              dispatch({ type: ActionType.UPDATE_START_PRICE, payload: value })
            }
          />
          <ControlledInput
            title='End price'
            value={order.end_price}
            required
            onChange={(value) =>
              dispatch({ type: ActionType.UPDATE_END_PRICE, payload: value })
            }
          />
        </div>
      </div>
      <button type='submit' className='find-car-form__submit'>
        Submit
      </button>
    </form>
  )
}

export default FindCarForm
