import React from 'react'

function Post({title, body}) {
  return(
    <div className="article-content">
    <div className="article-title">
        <a href="/">{title}</a>
    </div>
      <p className="article-text">
          {body}
      </p>
    </div>
  ) 
}

export default Post