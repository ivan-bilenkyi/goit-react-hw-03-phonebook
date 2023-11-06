import { Input } from './ContactList.styled';

export const ContactFilter = ({ filter, onFindContacts }) => {
  return (
    <div>
      <Input
        type="text"
        value={filter}
        onChange={evt => onFindContacts(evt.target.value)}
        placeholder="find contact"
      ></Input>
    </div>
  );
};
