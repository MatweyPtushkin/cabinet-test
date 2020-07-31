import React from 'react';
import './Contacts.css';
import Modal from '../modal/Modal';

class Contacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: this.props.login,
            contacts: [],
            modalShow: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/contacts')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ contacts: data })
            })
    }

    showModal = () => {
        this.setState({ modalShow: true })
    }

    closeModal = (close) => {
        this.setState({ modalShow: close })
    }

    newContact = (name, tel, email) => {
        let newContact = {
            "id": this.state.contacts.length + 1,
            "name": name,
            "tel": tel,
            "email": email
        }
        this.closeModal();
        this.state.contacts.push(newContact)
        console.log(this.state.contacts)
    }

    render() {
        return (
            !this.state.modalShow ?
                <div className='contacts'>
                    <button onClick={this.showModal}>Добавить контакт</button>
                    <table>
                        <thead>
                            <tr>
                                <th>ФИО</th>
                                <th>Телефон</th>
                                <th>Почта</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contacts.map(item => {
                                    return (
                                        <tr key={item.tel}>
                                            <td key={item[0]}>{item.name}</td>
                                            <td key={item[1]}>{item.tel}</td>
                                            <td key={item[2]}>{item.email}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div> : <Modal closeModal={this.closeModal} contacts={this.state.contacts} newContact={this.newContact} />
        )
    }
}

export default Contacts;