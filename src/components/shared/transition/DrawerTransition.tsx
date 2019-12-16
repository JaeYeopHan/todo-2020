import './DrawerTransition.scss'

import React, { ReactChild } from 'react'
import { CSSTransition } from 'react-transition-group'

interface IDrawerTransitionProps {
  children: ReactChild | ReactChild[]
  in: boolean
  isMountOnEnter?: boolean
  onEnter?: () => void
  onExited?: () => void
}

export const DrawerTransition = (props: IDrawerTransitionProps) => {
  return (
    <CSSTransition
      timeout={400}
      in={props.in}
      mountOnEnter={props.isMountOnEnter}
      onEnter={props.onEnter}
      onExited={props.onExited}
      classNames={'drawer'}
    >
      {props.children}
    </CSSTransition>
  )
}
