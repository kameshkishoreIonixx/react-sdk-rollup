import React from 'react'
import { ButtonProps } from './Button.types'

export const Button = ({ text, disabled, onClick }: ButtonProps) => {
    return <button disabled={disabled} onClick={onClick}>{text}</button>
}
