import React, { CSSProperties } from 'react'
import { ButtonPropsInterface } from './props.interface'
import { Style } from './style'

export default function ButtonWebComponent(props: ButtonPropsInterface) {
  return (
    <button
      style={
        { ...Style.button, ...Style.buttonText } as unknown as CSSProperties
      }
      onClick={props.onClick}
    >
      WEB {props.text}
    </button>
  )
}
