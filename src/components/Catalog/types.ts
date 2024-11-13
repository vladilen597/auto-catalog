export interface ICar {
  id: number
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
  image: string
  price: number
  vin_number: string
  attachments: { id: number; path: string; full_url: string; type: string }[]
}

export interface ISortOption {
  id: number
  field?: string
  type?: 'asc' | 'desc'
  name: string
}

export const options: ISortOption[] = [
  {
    id: 1,
    field: 'price',
    type: 'asc',
    name: 'Price: Low to High',
  },
  {
    id: 2,
    field: 'price',
    type: 'desc',
    name: 'Price: High to Low',
  },
  {
    id: 3,
    field: 'mileage',
    type: 'asc',
    name: 'Mileage: Low to High',
  },
  {
    id: 4,
    field: 'mileage',
    type: 'desc',
    name: 'Mileage: High to Low',
  },
]
