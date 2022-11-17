import { useSelector, useDispatch } from 'react-redux';
import { getStatusFilter } from 'redux/selectors';
import { getStatusContacts } from 'redux/selectors';
// import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Title } from './ContactsList/ContactsListStyled';
import { contactsFilter } from 'redux/filterSlice';
import { addOneContact, deleteOneContact } from 'redux/contactsSlice';

export function App() {

  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const contacts = useSelector(getStatusContacts)

  const addContact = contact => {
    if (hasAlreadyAdded(contact)) {
      Notiflix.Notify.info(`${contact.name} is already in contacts`)
      return
    }

    dispatch(addOneContact(contact));
  };

  const hasAlreadyAdded = ({ name }) =>
    contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

  const handleChange = e => {
    const { value } = e.target
    dispatch(contactsFilter(value));
  };

  const onFilter = () => {
    if (!filter) { 
      return contacts
    }

    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowerCase))
  };

  const deleteFromContacts = name => {

    dispatch(deleteOneContact(name))
  };


  console.log(contacts)
  
    return (
      <div>
        <Title>Phonebook</Title>
        <Form onSubmit={addContact} />
        {contacts.length > 0 && (
          <>
            <Title>Contacts</Title>
            <ContactList
              data={onFilter()}
              deleteFromContacts={deleteFromContacts}
            />
            <Filter handleChange={handleChange} value={filter} />
          </>
        )}
      </div>
    );
}


Notiflix.Notify.init({
  position: 'center-top',
  timeout: 2000,
  clickToClose: true,
});