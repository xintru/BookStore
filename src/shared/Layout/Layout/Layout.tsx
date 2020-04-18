import React, { FC } from 'react'
import classes from './Layout.module.scss'

type Props = {
  children?: React.ReactNode
}

const Layout: FC = (props: Props) => (
  <div className={`${classes.layout} centered`}>{props.children}</div>
)

export default Layout
