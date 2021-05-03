import React, { Component } from 'react';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    message: null,
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onSubmit: PropTypes.func,
  };

  setMessage = note => {
    this.setState({ message: note });
    setTimeout(() => {
      this.setState({ message: null });
    }, 2500);
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();

    if (name === '') {
      this.setMessage('Enter contact name, please!');
      return;
    }
    if (number === '') {
      this.setMessage('Enter contact phone, please!');
      return;
    }
    if (
      this.props.contacts.find(
        item => item.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      this.setMessage('Contact already exists!');
      return;
    }

    this.props.onSubmit(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, number, message } = this.state;

    return (
      message && alert(message),
      (
        <div className={styles.container}>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <label>
              <input
                className={styles.input}
                type="text"
                value={name}
                name="name"
                placeholder="Name"
                onChange={this.handleChange}
              />
            </label>
            <label>
              <input
                className={styles.input}
                type="tel"
                value={number}
                name="number"
                placeholder="Phone"
                onChange={this.handleChange}
              />
            </label>
            <button className={styles.btn} type="submit">
              Add contact
            </button>
          </form>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.phoneBook.contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(phoneBookActions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
