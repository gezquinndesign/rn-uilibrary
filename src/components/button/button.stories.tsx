import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Button from './button'

export const Template = (props) => <Button text={props.text} onClick={props.onClick} />

// On-Device Register
storiesOf('Button', module).add('Button native', (props) => <Template {...props} />)
