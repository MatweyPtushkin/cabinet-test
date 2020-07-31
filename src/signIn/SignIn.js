import React from 'react';
import './SignIn.css';
import {Link} from 'react-router-dom';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            login: '',
            password: '',
            isLogin: true
        }
    }

    inputDataLogin = (e) => {
        this.setState({login: e.target.value})
    }

    inputDataPassword = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        return(
            <div className='signIn'>
                <div className='signIn__inner'>
                    <div className='signIn__inner-header'>
                        <h2>Чтобы продолжить, войдите в систему</h2>
                    </div>
                    <div className='signIn__inner-form'>
                        <form onSubmit={this.submitForm}>
                            <div className='signIn__inner-form__login'>
                                <span>Введите логин:</span> <input type='text' onChange={this.inputDataLogin}/>
                            </div>
                            <div className='signIn__inner-form__password'>
                                <span>Введите пароль:</span> <input type='password' onChange={this.inputDataPassword}/>
                            </div>
                            <div className='signIn__inner-form__submit'>
                                <button onClick={() => this.props.updateData(this.state.isLogin, this.state.login, this.state.password)}>Войти в систему</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;