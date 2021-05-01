import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

function Contact({ id, name, number, deleteHandler }) {
  return (
    <li key={id} className={styles.contact}>
      <span className={styles.name}>{name}</span>
      <span className={styles.number}>{number}</span>
      <button className={styles.btn} onClick={deleteHandler} data-id={id}>
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  deleteHandler: PropTypes.func.isRequired,
};

export default Contact;