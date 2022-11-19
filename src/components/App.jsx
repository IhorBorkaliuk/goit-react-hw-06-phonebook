import { Filter } from './Filter/Filter';
import { Title } from './ContactsList/ContactsListStyled';
import { Form } from './Form/Form';
import { AppWrapper } from './ContactsList/ContactsListStyled';
import { ContactList } from './ContactsList/ContactsList';
import { getStatusContacts } from 'redux/selectors';
import { getStatusFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Notify } from 'services/Notify';



export function App() {
  const filter = useSelector(getStatusFilter);
  const contacts = useSelector(getStatusContacts);

  const getFilteredContacts = (filter, contacts) => {
        if (!filter) {
          return contacts;
        }
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
    const filteredContacts = getFilteredContacts(filter, contacts);
  return (
    <AppWrapper>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contacts</Title>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList contacts={filteredContacts} />
        </>
      ) : (
        <Title>Додайте свій перший контакт до записної книжки</Title>
      )}
    </AppWrapper>
  );
}

  Notify();