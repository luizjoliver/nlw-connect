import type React from 'react'
import type { ComponentProps } from 'react'

type ButtonPropsType = ComponentProps<'button'> & {
  children: React.ReactNode
}

export default function Button({ children, ...rest }: ButtonPropsType) {
  return (
    <button
      className=" flex items-center justify-between px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...rest}
    >
      {children || 'Enviar'}
    </button>
  )
}
