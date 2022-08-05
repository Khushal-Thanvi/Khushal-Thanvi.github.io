import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Infoarea } from './components/infoarea';
import {useState} from 'react';


function App() {

  const [page, setPage] = useState('About');

  const flash_link_icon = ev => {
    var path = 'icons/linkedin_active.png'
    ev.target.src = path
  }

  const dull_link_icon = ev => {
    var path = 'icons/linkedin.png'
    ev.target.src = path
  }

  const flash_git_icon = ev => {
    var path = 'icons/github_active.png'
    ev.target.src = path
  }

  const dull_git_icon = ev => {
    var path = 'icons/github.png'
    ev.target.src = path
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <h2 id='my_name'>Khushal R Thanvi</h2>
        <img id='title-photo' src='title-photo.png' />
        <div id='social_handles'>
          <a href='https://www.linkedin.com/in/khushal-thanvi/' target='_blank' ><img id='linkedin' onMouseOver={flash_link_icon} onMouseOut={dull_link_icon} src='icons/linkedin.png' /></a>
          <a href='https://github.com/Khushal-Thanvi' target='_blank' ><img id='github' onMouseOver={flash_git_icon} onMouseOut={dull_git_icon} src='icons/github.png' /></a>
        </div>
      </header>
      <Navbar setPage = {setPage} page = {page}/>
      <Infoarea page = {page} />
    </div>
  );
}

export default App;
