import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from './Components/Container/Container';
import Title from './Components/Title/Title';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

const App = ({ contacts }) => {
  return (
    <Container>
      <Title />
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  contacts: state.phoneBook.contacts,
});

export default connect(mapStateToProps, null)(App);
