import React from 'react'

function Post({title, name, email, body}) {
  return(
    <div className="article-content">
    <div className="article-title">
        <a href="/">{title}</a>
        <a href="/">{name}</a>
    </div>
      <p className="article-text">
          {body}
          {email}
      </p>
    </div>
  ) 
}

export default Post
