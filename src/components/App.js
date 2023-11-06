import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
// import { ContactFilter } from './Contacts/ContactFilter';
import { ContactList } from './Contacts/ContactList';
import { GlobalStyle } from './GlobalStyle';

// import { nanoid } from 'nanoid';

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

  findContacts = value => {
    this.setState({
      filter: value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  addContact = newContact => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is alredy in contacts`);
      return;
    }
    const contact = {
      ...newContact,
      id: nanoid(),
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(({ name }) => {
      const hasName = name.toLowerCase().includes(filter.toLowerCase());
      return hasName;
    });

    return (
      <Layout>
        <PhonebookForm onAdd={this.addContact} />
        <div>
          <h2>Contacts</h2>
          <ContactList
            items={visibleContacts}
            onDelete={this.deleteContact}
            filter={filter}
            onFindContacts={this.findContacts}
          />
        </div>
        <GlobalStyle />
      </Layout>
    );
  }
}
