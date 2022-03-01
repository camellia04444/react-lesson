import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'

const StyledFooter = styled(Footer)`
  color: red;
`

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <StyledFooter />
    </div>
  )
}

export default DefaultLayout
