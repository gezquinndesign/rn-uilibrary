import React, { CSSProperties } from 'react'
import { ButtonPropsInterface } from './props.interface'
import { Style } from './style'

export default function ButtonWebComponent(props: ButtonPropsInterface) {
  const { disabled } = props
  console.log(props)

  return (
    <button
      style={
        {
          ...Style.button,
          ...Style.buttonText,
          backgroundColor: disabled ? 'gray' : Style.button.backgroundColor,
        } as unknown as CSSProperties
      }
      onClick={props.onClick}
      disabled={disabled}
    >
      WEB {props.text}
    </button>
  )
}
