import React, { type ComponentProps } from 'react'

type InputRootProps = {
  error?: boolean
} & ComponentProps<'div'>

export function InputRoot({ error, children, ...rest }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2  focus-within:border-gray-100 data-[error=true]:border-danger"
      {...rest}
    >
      {children}
    </div>
  )
}

type InputIconPropsType = ComponentProps<'span'>

export function InputIcon({ children, ...rest }: InputIconPropsType) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...rest}
    >
      {children}
    </span>
  )
}

type InputFieldPropsType = ComponentProps<'input'>

export function InputField({ children, ...rest }: InputFieldPropsType) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...rest} />
}
