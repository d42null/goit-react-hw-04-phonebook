import { useState, useEffect } from 'react';
import { ContactsTitle, Container, Title } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContacForm';
import { nanoid } from 'nanoid';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
const LS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem(LS_KEY)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);
  const onSubmit = (name, number) => {
    if (contacts.find(c => c.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(contacts => [{ name, number, id: nanoid() }, ...contacts]);
  };
  const onDelete = id => {
    setContacts(contacts => contacts.filter(x => x.id !== id));
  };
  const onFilterChange = e => {
    setFilter(e.target.value.toLowerCase());
  };
  const visibleContacts = () =>
    filter
      ? contacts.filter(
          c =>
            c.name.toLowerCase().includes(filter) ||
            c.number.toLowerCase().includes(filter)
        )
      : contacts;
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={onSubmit} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter value={filter} onChange={onFilterChange} />
      <ContactList contacts={visibleContacts()} onDelete={onDelete} />
    </Container>
  );
};
