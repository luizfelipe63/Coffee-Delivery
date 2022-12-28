import { InputHTMLAttributes } from 'react'
import { InputContent } from './styles'

export interface textInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
}

export function Input({ isOptional, ...props }: textInputProps) {
  return (
    <InputContent>
      <input {...props} />
      {isOptional && <span>Opcional</span>}
    </InputContent>
  )
}
