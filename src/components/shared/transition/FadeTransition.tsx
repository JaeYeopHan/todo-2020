import './FadeTransition.scss'

import React, { ReactChild } from 'react'
import { CSSTransition } from 'react-transition-group'

interface IFadeTransitionProps {
  children: ReactChild | ReactChild[]
  in: boolean
  isMountOnEnter?: boolean
}

export const FadeTransition = (props: IFadeTransitionProps) => {
  const { isMountOnEnter = false } = props

  return (
    <CSSTransition timeout={300} in={props.in} mountOnEnter={isMountOnEnter} classNames={'fade'}>
      {props.children}
    </CSSTransition>
  )
}
