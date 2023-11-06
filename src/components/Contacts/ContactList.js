import { AiOutlineUserDelete } from 'react-icons/ai';
import { ContactFilter } from './ContactFilter';
import { Button, Item, List, Wrap } from './ContactList.styled';

export const ContactList = ({ items, onDelete, filter, onFindContacts }) => {
  return (
    <Wrap>
      <ContactFilter filter={filter} onFindContacts={onFindContacts} />
      <List>
        {items.map(item => {
          return (
            <Item key={item.id}>
              {item.name}: <span>{item.number}</span>
              <Button onClick={() => onDelete(item.id)}>
                <AiOutlineUserDelete />
              </Button>
            </Item>
          );
        })}
      </List>
    </Wrap>
  );
};
