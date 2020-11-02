import React, {useState, useEffect, useRef, useContext} from 'react'
import Header from './Header'
import PostList from './PostList'
import Footer from './Footer'
import ThemeContext from '../context'

function App() {
  const ref = useRef(null)
  const [posts, setPost] = useState([])
  const [check, setCheck] = useState(false)
  const [type, setType] = useState('posts')
  const {theme, setTheme} = useContext(ThemeContext)
  
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

  const handleFocus = () => {
    ref.current.style.color = 'red'
  }

  return (
    <div className={`app ${theme}`}>
      <div className="form">
        <input ref={ref} />
        <button onClick={handleFocus}>focus</button>
      </div>
      <Header changeType={setType} check={check} changeTheme={change}/>
      <PostList posts={posts}/>
      <Footer />
    </div>
  )
  
}

export default React.memo(App, () => true)
