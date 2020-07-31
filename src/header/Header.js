import React from 'react';
import './Header.css';
import {Link, Route} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                <nav>
                    <ul>
                        <li><Link to='/'>Главная</Link></li>
                        <li><Link to='/contacts'>Контакты</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;