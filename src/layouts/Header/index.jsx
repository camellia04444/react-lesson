import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import './index.css'

const StyledHeaderContainer = styled.header`
  color: ${(props) => props.colorA};
  background-color: gray;
  transform: translate(50px);

  ${(props) =>
    props.middle &&
    css`
      padding: 10px;
    `}
  & > a {
    // & : 本身的元件
    color: green;
  }
`

const Header = () => {
  const [inMiddle, setMiddle] = useState(false)
  return (
    <StyledHeaderContainer
      colorA="cyan"
      middle={inMiddle}
      onClick={() => setMiddle(!inMiddle)}
    >
      Header
      <a href="">1st</a>
      <div>
        <a href="">2nd </a>
      </div>
    </StyledHeaderContainer>
  )
}

export default Header
