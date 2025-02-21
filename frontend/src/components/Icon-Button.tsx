import type React from 'react'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type IconButtonPropsType = ComponentProps<'button'> & {
  children: React.ReactNode
}

export default function IconButton({
  children,
  className,
  ...rest
}: IconButtonPropsType) {
  return (
    <button
      className={twMerge(
        'p-1.5 bg-gray-500 text-blue font-semibold rounded-md  cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
