import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <form className={styles.form}>
      <label>
        <span className={styles.title}>Search by name</span>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;