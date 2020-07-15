import React, {useState} from 'react'
import Header from './Header'
import PostList from './PostList'
import Footer from './Footer'

const initPost = [
  {
      id: 1,
      title: "Title",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
  },
  {
      id: 2,
      title: "Title",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
  },
  {
      id: 3,
      title: "Title",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
  },
  {
      id: 5,
      title: "Title",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
  },
  {
      id: 6,
      title: "Title",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
  }
]

function App() {

  const [posts, setPost] = useState(initPost)
  const [theme, setTheme] = useState('light')
  const [check, setCheck] = useState(false)

  const change = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    setCheck(!check)
  }

  return (
    <div className={`app ${theme}`}>
      <Header check={check} changeTheme={change}/>
      <PostList posts={posts}/>
      <Footer />
    </div>
  )
  
}

export default App
