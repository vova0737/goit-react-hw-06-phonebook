import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import phoneBookActions from '../../redux/phonebook/phonebook-actions';

const ContactList = ({ contacts, onDelete, clearFilter }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.contact}>
          <span className={styles.name}>{name}</span>
          <span className={styles.number}>{number}</span>
          <button
            className={styles.btn}
            onClick={() => {
              onDelete(id, clearFilter());
            }}
            aria-label="Удалить контакт"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const getFilteredContactsList = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ phoneBook: { contacts, filter } }) => ({
  contacts: getFilteredContactsList(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(phoneBookActions.deleteContact(id)),
  clearFilter: () => dispatch(phoneBookActions.changeFilter('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
