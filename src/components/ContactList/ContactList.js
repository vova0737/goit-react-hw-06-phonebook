import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

function ContactList({ contacts, deleteHandler }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) =>
        Contact({
          id,
          name,
          number,
          deleteHandler,
        }),
      )}
    </ul>
  );
}

ContactList.defaultProps = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: 'Name',
      number: '+380',
    }),
  ),
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

export default ContactList;