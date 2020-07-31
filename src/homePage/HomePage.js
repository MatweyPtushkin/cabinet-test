import React from 'react';
import SignIn from '../signIn/SignIn';

class HomePage extends React.Component {

    constructor() {
        super();

        this.state = {
            isLogin: false,
            data: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/users')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({ data: data })
            })
    }

    updateData = (boolean, login, password, e) => {
        e = window.event;
        e.preventDefault();

        for (let i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].login == login && this.state.data[i].password == password) {
                this.setState({ isLogin: boolean})
                document.cookie = `login=${login}; expires=Thu, 30 Aug 2020 00:00:00 UTC; path=/`;
                return alert('Вы успешно авторизованы');
            }
            else {
                return alert('Не верный логин или пароль')
            }
        }
    }

    render() {
        return (
            <div className='homePage'>
                <p>Приветствую вас, Уважаемый пользователь. На этом сайте вы можете изучать список контактов. Чтобы это сделать перейдите в вкладку "Контакты".</p>
                {!this.state.isLogin ? <SignIn updateData={this.updateData} /> : <p>Вы успешно авторизованы. Можете открыть вкладку "Контакты"</p>}
            </div>
        )
    }
}

export default HomePage;