import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleSubmitForm = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const formRefs = event.currentTarget;
    const trim = name.trim() === '' || number.trim() === '';

    function clearFields() {
      formRefs[formRefs.length - 1].blur();
    }

    if (trim) {
      alert('Some field is empty');
      clearFields();
      return;
    }

    this.props.onSubmit(name.trim(), number.trim());
    this.setState(INITIAL_STATE);
    clearFields();
  };

  handleChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmitForm}>
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
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;