import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Button from './Button'

export const Template = (props) => <Button {...props} />

// On-Device Register
storiesOf('Button', module)
  .add('Button native', (props) => <Template {...props} />)
  .add('Button disabled', (props) => <Template {...props} disabled={true} />)
