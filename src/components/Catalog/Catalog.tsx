import { useCallback, useState } from 'react'
import CatalogList from './CatalogList/CatalogList'
import CatalogSort from './CatalogSort/CatalogSort'
import { useQuery } from '@tanstack/react-query'
import { ISortOption, options } from './types'
import { instance } from '../../utils/api'

import './Catalog.scss'

const Catalog = () => {
  const [sort, setSort] = useState(options[0])

  const onSortChange = useCallback((value: ISortOption) => {
    setSort(value)
  }, [])

  const params = {
    sort: sort.type,
    field: sort.field,
  }

  const { data: cars } = useQuery({
    queryFn: async () => {
      const { data } = await instance.get('/ad?per_page=16&page=1', {
        params,
      })
      return data.data
    },

    queryKey: ['cars', params.sort, params.field],
  })

  return (
    <div className='catalog'>
      <div className='catalog__topline'>
        <h2 className='catalog__title'>Catalog</h2>
        <div className='catalog__sort'>
          <CatalogSort selectedSorting={sort} onChange={onSortChange} />
        </div>
      </div>
      <div className='catalog__list'>
        <CatalogList items={cars} />
      </div>
    </div>
  )
}

export default Catalog
