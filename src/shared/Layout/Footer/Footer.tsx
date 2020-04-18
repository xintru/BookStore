import React, { FC } from 'react'
import classes from './Footer.module.scss'

const Footer: FC = () => (
  <footer className={classes.footer}>
    <h5>
      (Re)Created by <a href="https://github.com/xintru">Xintru.</a> 2020
    </h5>
  </footer>
)

export default Footer
