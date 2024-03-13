import React from 'react'
import { ButtonProps } from './button.types'
import { Button } from '@chakra-ui/react'

const BecknButton: React.FC<ButtonProps> = ({
  text,
  handleClick,
  className,
  children,
  disabled = false,
  fullWidth = true,
  variant = 'solid',
  colorScheme = 'primary',
  type = 'button',
  textColor = 'textSecondary'
}) => {
  return (
    <Button
      width={fullWidth ? 'full' : 'initial'}
      onClick={handleClick}
      className={className}
      isDisabled={disabled}
      variant={variant}
      colorScheme={colorScheme}
      type={type}
      // style={{color:'gray'}}
    >
      {children ? children : text}
    </Button>
  )
}

export default BecknButton
