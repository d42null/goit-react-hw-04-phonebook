import { Component } from 'react';
import { ContactsTitle, Container, Title } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContacForm';
import { nanoid } from 'nanoid';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const ls_contacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (ls_contacts) {
      this.setState({ contacts: ls_contacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts)
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }
  onSubmit = (name, number) => {
    if (this.state.contacts.find(c => c.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(pState => ({
      contacts: [{ name, number, id: nanoid() }, ...pState.contacts],
    }));
  };
  onDelete = id => {
    this.setState(pState => ({
      contacts: pState.contacts.filter(x => x.id !== id),
    }));
  };
  onFilterChange = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };
  visibleContacts = () =>
    this.state.filter
      ? this.state.contacts.filter(
          c =>
            c.name.toLowerCase().includes(this.state.filter) ||
            c.number.toLowerCase().includes(this.state.filter)
        )
      : this.state.contacts;
  render = () => (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={this.onSubmit} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter value={this.state.filter} onChange={this.onFilterChange} />
      <ContactList contacts={this.visibleContacts()} onDelete={this.onDelete} />
    </Container>
  );
}
