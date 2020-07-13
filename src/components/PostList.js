import React from 'react'
import Post from './Post'

function PostList({posts}) {
  return (
        <div className="blog-content layout">
            { posts.length ? posts.map(post => <Post key={post.id} {...post}/>) : "Нет записей" }
        </div>
  )
}

export default PostList