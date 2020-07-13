import React from 'react'
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

class App extends React.Component {

  state = {
    posts: initPost,
    theme: 'light',
    check: false
  }

  change = () => {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light',
      check: !this.state.check
    })
  }

  render() {
    return (
      <div className={`app ${this.state.theme}`}>
        <Header check={this.state.check} changeTheme={this.change}/>
        <PostList posts={this.state.posts}/>
        <Footer />
      </div>
    )
  }
}

export default App
