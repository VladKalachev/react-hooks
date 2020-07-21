import React, {useState, useEffect} from 'react'
import Header from './Header'
import PostList from './PostList'
import Footer from './Footer'

function App() {

  const [posts, setPost] = useState([])
  const [theme, setTheme] = useState('light')
  const [check, setCheck] = useState(false)
  const [type, setType] = useState('posts')

  useEffect(() => {
    setTimeout(() => {
      document.title = `Page ${type}`
    }, 300)
   
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => {
        setPost(json)
      })
      return () => {
        document.title = "Page"
      }
  }, [type])

  const change = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    setCheck(!check)
  }

  return (
    <div className={`app ${theme}`}>
      <Header changeType={setType} check={check} changeTheme={change}/>
      <PostList posts={posts}/>
      <Footer />
    </div>
  )
  
}

export default App
