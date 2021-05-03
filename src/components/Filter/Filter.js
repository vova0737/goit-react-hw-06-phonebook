import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import phoneBookActions from '../../redux/phonebook/phonebook-actions';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter, contacts }) => {
  return (
    <form className={styles.form}>
      <label>
        <span className={styles.title}>Search by name</span>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  value: state.phoneBook.filter,
  contacts: state.phoneBook.contacts,
});

const mapDispatchToProps = (dispatsh) => ({
  onChangeFilter: (e) =>
    dispatsh(phoneBookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
