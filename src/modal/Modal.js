import React from 'react';
import './Modal.css';

class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: this.props.modal,
            addName: '',
            addTel: '',
            addEmail: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/contacts')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({contacts: data})
        })
    }

    addName = (e) => {
       
            this.setState({addName: e.target.value})
      
    }

    addTel = (e) => {
        
            this.setState({addTel: e.target.value})
        
    }

    addEmail = (e) => {
       
            this.setState({addEmail: e.target.value})
     
    }

    render() {
        return (
            <div className='modal' style={{ display: this.state.modal }}>
                <div className='modal__inner'>
                    <div className='modal__inner-close'>
                        <button onClick={() => this.props.closeModal(this.state.modalShow)}>X</button>
                    </div>
                    <form onSubmit={this.submitForm}>
                        <div className='modal__inner-name'>
                            <span>Введите ФИО:</span> <input type='text' onChange={this.addName} />
                        </div>
                        <div className='modal__inner-tel'>
                            <span>Введите телефон:</span> <input type='number' onChange={this.addTel} />
                        </div>
                        <div className='modal__inner-email'>
                            <span>Введите почту:</span> <input type='email' onChange={this.addEmail} />
                        </div>
                        <div className='modal__inner-add'>
                            <button onClick={() => this.props.newContact(this.state.addName, this.state.addTel, this.state.addEmail)}>добавить контакт</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

    export default Modal;