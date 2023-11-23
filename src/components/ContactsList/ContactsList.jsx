import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id}>
        <Contact name={name} number={number} id={id} onDelete={onDelete} />
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
