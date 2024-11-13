import ControlledTextarea from '../../components/Shared/ControlledTextarea/ControlledTextarea'
import ControlledInput from '../../components/Shared/ControlledInput/ControlledInput'
import CustomSelect from '../../components/Shared/CustomSelect/CustomSelect'
import {
  DealerActionsTypes,
  initialDealerState,
  reducerDealer,
} from './dealerTypes'
import MediaUpload from '../../components/Shared/MediaUpload/MediaUpload'
import { CarActionsTypes, initialCarState, reducerCar } from './carTypes'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import Page from '../../components/Page/Page'
import { useEffect, useReducer, useState } from 'react'
import { instance } from '../../utils/api'
import { toast } from 'react-toastify'

import './CreatePost.scss'

const CreatePost = () => {
  const [carInfo, dispatchCar] = useReducer(reducerCar, initialCarState)
  const [dealerInfo, dispatchDealer] = useReducer(
    reducerDealer,
    initialDealerState
  )
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const { data: brands } = useQuery({
    queryFn: async () => {
      const { data } = await instance.get('/brands?per_page=100&page=1')
      return data.data
    },
    queryKey: ['brands'],
  })

  const { data: models, refetch: refetchModels } = useQuery({
    queryFn: async () => {
      const { data } = await instance.get(
        `/models/${carInfo.brand.name}?per_page=100&page=1`
      )
      return data.data
    },
    queryKey: ['models', carInfo.model.id],
    refetchOnMount: false,
  })

  const { data: generations, refetch: refetchGenerations } = useQuery({
    queryFn: async () => {
      const { data } = await instance.get(
        `/generation/${carInfo.model.model_code}`
      )
      return data.data
    },
    queryKey: ['generations', carInfo.generation.id],
    refetchOnMount: false,
  })

  useEffect(() => {
    if (carInfo.brand.id) {
      refetchModels()
    }
    dispatchCar({
      type: CarActionsTypes.UPDATE_MODEL,
      payload: { id: 0, name: '' },
    })
    dispatchCar({
      type: CarActionsTypes.UPDATE_GENERATION,
      payload: { id: 0, name: '' },
    })
  }, [carInfo.brand.id, refetchModels])

  useEffect(() => {
    if (carInfo.model.id) {
      refetchGenerations()
    }
    dispatchCar({
      type: CarActionsTypes.UPDATE_GENERATION,
      payload: { id: 0, name: '' },
    })
  }, [carInfo.model.id, refetchGenerations])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    if (
      !Array.from(carInfo.media).find((item) => item.type.includes('image'))
    ) {
      toast.error('You need to upload at least one image')
      return
    }
    try {
      const { data } = await instance.postForm('/ad', {
        ad: {
          title: carInfo.title,
          description: carInfo.description,
          price: carInfo.price,
          mileage: carInfo.mileage,
          age: carInfo.age,
          dealer: carInfo.dealer,
          vin_number: carInfo.vin,
          brand_id: carInfo.brand.id,
          model_id: carInfo.model.id,
          generation_id: carInfo.generation.id,
          attachments: Object.values(carInfo.media),
        },
        account: {
          first_name: dealerInfo.firstName,
          last_name: dealerInfo.lastName,
          email: dealerInfo.email,
          phone: dealerInfo.phone,
          telegram_id: dealerInfo.telegram,
        },
      })
      toast.success('Post successfully created!')
      navigate(`/catalog/${data.data.id}`)
    } catch (error) {
      toast.error('Error posting the ad. Try again later')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Page>
      <form className='create-post' onSubmit={(e) => handleSubmit(e)}>
        <div className='create-post__form-wrapper'>
          <div className='create-post__form-side'>
            <span className='create-post__title'>
              Fill out information about the car
            </span>
            <ControlledInput
              title='Title'
              value={carInfo.title}
              required
              onChange={(value) =>
                dispatchCar({
                  type: CarActionsTypes.UPDATE_TITLE,
                  payload: value,
                })
              }
            />
            <ControlledTextarea
              title='Description'
              value={carInfo.description}
              required
              onChange={(value) =>
                dispatchCar({
                  type: CarActionsTypes.UPDATE_DESCRIPTION,
                  payload: value,
                })
              }
            />
            <ControlledInput
              title='Price, $'
              value={carInfo.price}
              required
              onChange={(value) =>
                dispatchCar({
                  type: CarActionsTypes.UPDATE_PRICE,
                  payload: value,
                })
              }
            />
            <ControlledInput
              title='VIN'
              value={carInfo.vin}
              required
              onChange={(value) =>
                dispatchCar({
                  type: CarActionsTypes.UPDATE_VIN,
                  payload: value,
                })
              }
            />
            <ControlledInput
              title='Mileagem, mi'
              value={carInfo.mileage}
              required
              onChange={(value) =>
                dispatchCar({
                  type: CarActionsTypes.UPDATE_MILEAGE,
                  payload: value,
                })
              }
            />
            <ControlledInput
              title='Year'
              value={carInfo.age}
              required
              onChange={(value) =>
                dispatchCar({
                  type: CarActionsTypes.UPDATE_AGE,
                  payload: value,
                })
              }
            />
            <ControlledInput
              title='Dealer'
              value={carInfo.dealer}
              required
              onChange={(value) =>
                dispatchCar({
                  type: CarActionsTypes.UPDATE_DEALER,
                  payload: value,
                })
              }
            />
            <div className='create-post__select-group'>
              <CustomSelect
                title='Brand'
                value={carInfo.brand}
                onSelect={(value) =>
                  dispatchCar({
                    type: CarActionsTypes.UPDATE_BRAND,
                    payload: value,
                  })
                }
                options={brands}
              />
              <CustomSelect
                title='Model'
                value={carInfo.model}
                onSelect={(value) =>
                  dispatchCar({
                    type: CarActionsTypes.UPDATE_MODEL,
                    payload: value,
                  })
                }
                options={models}
              />
              <CustomSelect
                title='Generation'
                value={carInfo.generation}
                onSelect={(value) =>
                  dispatchCar({
                    type: CarActionsTypes.UPDATE_GENERATION,
                    payload: value,
                  })
                }
                options={generations}
              />
            </div>
            <MediaUpload
              value={carInfo.media}
              onChange={(value) =>
                dispatchCar({
                  type: CarActionsTypes.UPDATE_MEDIA,
                  payload: value,
                })
              }
            />
          </div>
          <div className='create-post__form-side'>
            <span className='create-post__title'>
              Fill out contact information
            </span>
            <ControlledInput
              title='First Name'
              value={dealerInfo.firstName}
              required
              onChange={(value) =>
                dispatchDealer({
                  type: DealerActionsTypes.UPDATE_FIRST_NAME,
                  payload: value,
                })
              }
            />
            <ControlledInput
              title='Last Name'
              value={dealerInfo.lastName}
              required
              onChange={(value) =>
                dispatchDealer({
                  type: DealerActionsTypes.UPDATE_LAST_NAME,
                  payload: value,
                })
              }
            />
            <ControlledInput
              title='Email'
              value={dealerInfo.email}
              required
              onChange={(value) =>
                dispatchDealer({
                  type: DealerActionsTypes.UPDATE_EMAIL,
                  payload: value,
                })
              }
            />
            <ControlledInput
              title='Phone'
              value={dealerInfo.phone}
              required
              onChange={(value) =>
                dispatchDealer({
                  type: DealerActionsTypes.UPDATE_PHONE,
                  payload: value,
                })
              }
            />
            <ControlledInput
              title='Telegram'
              value={dealerInfo.telegram}
              required
              onChange={(value) =>
                dispatchDealer({
                  type: DealerActionsTypes.UPDATE_TELEGRAM,
                  payload: value,
                })
              }
            />
          </div>
        </div>
        <button
          disabled={isLoading}
          className='create-post__submit'
          type='submit'
        >
          Submit
        </button>
      </form>
    </Page>
  )
}

export default CreatePost
