import React from 'react'
import Checkbox from '../common/Checkbox'

function Header({check, changeTheme}) {
  return (
    <header className="blog-header">
      <div className="layout layout-header" >
        <div className="blog-logo">
          <a href="/">IT Блог</a>
        </div>
        <Checkbox 
            checked={check} 
            changeTheme={changeTheme}
        />
      </div>
  </header>
  )
}

export default Header