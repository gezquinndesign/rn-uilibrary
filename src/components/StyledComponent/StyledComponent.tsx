import React from 'react'
import styled from 'styled-components/native'

const Base = styled.View`
  height: 200px;
  width: 200px;
  background-color: papayawhip;
`

const Text = styled.Text`
  font-size: 20px;
  color: cyan;
`

export default function StyledComponent() {
  return (
    <Base>
      <Text>Styled Component</Text>
    </Base>
  )
}
