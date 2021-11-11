/** @jsx jsx */
import { jsx } from "theme-ui"
import './styles.css'

type ButtonProps = {
  className?: string
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  variant?: 'primary' | 'secondary',
  sx?: any
}

const Button = ({ children, className, variant = 'primary', disabled = false, ...other }: ButtonProps) => (
  <button 
    className={`${className} btn btn-${variant} ${disabled && 'btn-disabled'}`}
    disabled={disabled}
    {...other}
  >
    {children}
  </button>
)

export default Button
