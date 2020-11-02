import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import ThemeContext from './context'

function Main() {
  const [theme, setTheme] = useState('light')
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <App />
      </ThemeContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
