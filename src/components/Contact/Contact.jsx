import PropTypes from 'prop-types';
import { Button, ContactContainer, Name, Number } from './Contact.styled';

export const Contact = ({ name, number, id, onDelete }) => (
  <ContactContainer>
    <ContactContainer>
      <Name> {name}: </Name>
      <Number> {number}</Number>
    </ContactContainer>
    <Button type="button" name="Delete" onClick={() => onDelete(id)}>
      Delete
    </Button>
  </ContactContainer>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
