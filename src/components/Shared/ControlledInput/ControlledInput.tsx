import React from 'react'
import './ControlledInput.scss'

interface ICustomInputProps {
  value: string | number
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  title: string
}

const areEqual = (oldProps: ICustomInputProps, newProps: ICustomInputProps) => {
  return (
    oldProps.value === newProps.value &&
    oldProps.title === newProps.title &&
    oldProps.placeholder === newProps.placeholder &&
    oldProps.onChange === newProps.onChange
  )
}

const ControlledInput = React.memo(
  ({
    title,
    value,
    onChange,
    required,
    placeholder = `Enter ${title.toLowerCase()}`,
  }: ICustomInputProps) => {
    return (
      <label className='controlled-input'>
        <span className='controlled-input__title'>
          {title}
          {required ? (
            <span className='controlled-input__title-required'>*</span>
          ) : null}
        </span>
        <input
          className='controlled-input__input'
          type='text'
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    )
  },
  areEqual
)

export default ControlledInput
