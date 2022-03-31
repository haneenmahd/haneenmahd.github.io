import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  padding: 10px 30px;
  background: #111;
  color: #fafafa;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.2s;

  &:hover {
    background-color: #222;
  }
`

export default function Button(props) {
  return <ButtonStyle>{props.children}</ButtonStyle>
}
