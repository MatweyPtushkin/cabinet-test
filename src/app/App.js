import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../header/Header';
import SignIn from '../signIn/SignIn';
import HomePage from '../homePage/HomePage';
import Contacts from '../contacts/Contacts';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLogin: false
    }
  }

  login = () => {
    return this.state.isLogin ? <p>Вы уже авторизированы</p>: <SignIn/>
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <BrowserRouter>
            <Header/>
            <Route exact path='/' component={HomePage}/>  
            <Route path='/contacts' component={Contacts}/>         
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App;
