import React, { useEffect } from 'react'
import Checkbox from '../common/Checkbox'

function Header({check, changeType, changeTheme}) {
  useEffect(() => {
    console.log('update');
  }, [changeType])

  return (
    <header className="blog-header">
      <div className="layout layout-header" >
        <div className="blog-logo">
          <a href="/">IT Блог</a>
        </div>
        <div className="tabs">
          <button onClick={() => changeType('posts')}>Посты</button>
          <button onClick={() => changeType('users')}>Пользователи</button>
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
