import React from 'react'
import classes from './Loading.module.scss'

const Loading = () => (
  <div className={classes['lds-ripple']}>
    <div></div>
    <div></div>
  </div>
)

export default Loading
