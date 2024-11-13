import CustomSelect from '../../Shared/CustomSelect/CustomSelect'
import { ISortOption, options } from '../types'

interface ICatalogSortProps {
  selectedSorting: ISortOption
  onChange: (value: ISortOption) => void
}

const CatalogSort = ({ selectedSorting, onChange }: ICatalogSortProps) => {
  return (
    <div>
      <CustomSelect
        options={options}
        title='Sort by'
        value={selectedSorting}
        onSelect={onChange}
      />
    </div>
  )
}

export default CatalogSort
