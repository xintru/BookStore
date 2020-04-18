import React, { FC, ReactNode } from 'react'
import classes from './Button.module.scss'

interface Props {
  children: ReactNode
  onClick?: (arg: any) => void
  href?: string
}

const Button: FC<Props> = ({ children, onClick, href, ...props }) => {
  if (href) {
    return (
      <a href={href}>
        <button {...props} className={classes.button}>
          {children}
        </button>
      </a>
    )
  }
  return (
    <button {...props} onClick={onClick} className={classes.button}>
      {children}
    </button>
  )
}

export default Button
