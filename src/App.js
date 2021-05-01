import './App.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: initialState,
    filter: '',
  };

  componentDidMount() {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storageContacts) {
      this.setState({ contacts: storageContacts });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = (name, number) => {
    const { contacts } = this.state;

    const toLowerCase = contact =>
      contact.name.toLowerCase() === name.toLowerCase();

    const contactFind = contacts.find(toLowerCase);

    if (contactFind) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  handleFilterInput = e => {
    const filter = e.currentTarget.value;
    this.setState({ filter });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  deleteContact = e => {
    const deletedId = e.currentTarget.dataset.id;

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deletedId),
    }));
    e.currentTarget.blur();
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.handleFilterInput} />
          <ContactList
            contacts={this.getFilteredContacts()}
            deleteHandler={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
