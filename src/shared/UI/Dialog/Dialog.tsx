import React, { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import classes from './Dialog.module.scss'

interface Props {
  children?: ReactNode | string
  onClose: () => never
  show: boolean
}

const DialogOverlay: FC<Props> = (props) => {
  const { children, onClose, show } = props
  return createPortal(
    <>
      {show && <div className={classes.backdrop} onClick={() => onClose()} />}
      <CSSTransition
        in={show}
        mountOnEnter
        timeout={200}
        unmountOnExit
        classNames="dialog-transition"
      >
        <div className={classes.dialog}>{children}</div>
      </CSSTransition>
    </>,
    document.getElementById('dialog-root')!
  )
}

const Dialog: FC<any> = (props) => <DialogOverlay {...props} />

export default Dialog
