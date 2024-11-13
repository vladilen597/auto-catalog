import { memo } from 'react'
import './ControlledTextarea.scss'

interface IControlledTextarea {
  value: string
  title: string
  required?: boolean
  placeholder?: string
  onChange: (value: string) => void
}

const areEqual = (
  oldProps: IControlledTextarea,
  newProps: IControlledTextarea
) => {
  return (
    oldProps.value === newProps.value && oldProps.onChange === newProps.onChange
  )
}

const ControlledTextarea = memo(
  ({
    title,
    value,
    required,
    placeholder = `Enter ${title}`,
    onChange,
  }: IControlledTextarea) => {
    return (
      <label className='controlled-textarea'>
        <span className='controlled-textarea__title'>
          {title}
          {required ? (
            <span className='controlled-textarea__title-required'>*</span>
          ) : null}
        </span>
        <textarea
          className='controlled-textarea__textarea'
          value={value}
          onChange={(event) => onChange(event.target.value)}
          maxLength={1000}
          placeholder={placeholder}
        ></textarea>
      </label>
    )
  },
  areEqual
)

export default ControlledTextarea
