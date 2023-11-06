import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import initialContacts from '../data.json';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactList } from './Contacts/ContactList';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: initialContacts,
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

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
