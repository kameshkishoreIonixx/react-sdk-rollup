import React from 'react'
import { InputProps } from './Input.types'

export const Input = ({value, disabled, placeholder, onChange}: InputProps) => {
  return (
    <input value={value} disabled={disabled} placeholder={placeholder} onChange={onChange} />
  )
}
