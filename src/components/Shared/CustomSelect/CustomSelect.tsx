import { useState, memo } from 'react'
import './CustomSelect.scss'

const areEqual = (
  oldProps: ICustomSelectProps,
  newProps: ICustomSelectProps
) => {
  return (
    oldProps.title === newProps.title &&
    oldProps.value === newProps.value &&
    oldProps.options === newProps.options &&
    oldProps.onSelect === newProps.onSelect
  )
}

interface ICustomSelectProps {
  title: string
  value: { id: number; name: string }
  options: { id: number; name: string }[]
  onSelect: (value: { id: number; name: string }) => void
}

const CustomSelect = memo(
  ({ title, value, options, onSelect }: ICustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
      setIsOpen((prevState) => !prevState)
    }

    const handleClose = () => {
      setIsOpen(false)
    }

    return (
      <div className='custom-select'>
        <span className='custom-select__title'>{title}</span>
        <button
          type='button'
          className='custom-select__dropdown'
          onClick={handleToggle}
        >
          {value.name || `Select ${title.toLowerCase()}`}
        </button>
        {isOpen ? (
          <ul className='custom-select__list'>
            {options?.map((option) => (
              <li
                key={option.id}
                onClick={() => {
                  onSelect(option)
                  handleClose()
                }}
                className='custom-select__list-item'
              >
                {option.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    )
  },
  areEqual
)

export default CustomSelect
