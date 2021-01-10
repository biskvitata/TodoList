import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h2 style={titleStyle}>ToDo list</h2>
    </header>
  )
}

const titleStyle = {
  fontSize: '40px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '500'
}

const headerStyle = {
  marginBottom: '15px'
}

export default Header