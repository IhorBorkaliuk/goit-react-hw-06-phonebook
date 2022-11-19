import { Filter } from './Filter/Filter';
import { Title } from './ContactsList/ContactsListStyled';
import { Form } from './Form/Form';
import { AppWrapper } from './ContactsList/ContactsListStyled';
import { getStatusContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Notify } from 'services/Notify';


export function App() {
  const contacts = useSelector(getStatusContacts);

  return (
    <AppWrapper>
      <Title>Phonebook</Title>
      <Form/>
      <Title>Contacts</Title>
      {contacts.length > 0 ? (
        <>
          <Filter/>
        </>
      ) : (
        <Title>Додайте свій перший контакт до записної книжки</Title>
      )}
    </AppWrapper>
  );
}

  Notify();