import React from 'react'
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'default' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
}
export const Button = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  className = '',
  type = 'button',
}: ButtonProps) => {
  const baseStyles =
    'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B61FF]'
  const variantStyles = {
    default: 'bg-[#7B61FF] text-white hover:bg-[#6A50E0] shadow-sm',
    outline:
      'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50',
  }
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  }
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
