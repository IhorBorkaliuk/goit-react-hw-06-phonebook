import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatusFilter } from 'redux/selectors';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Title } from './ContactsList/ContactsListStyled';
import { contactsFilter } from 'redux/filterSlice';

const LOCALE_STORAGE_KEY = 'AddedContacts'

export function App() {

  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);






    const [contacts, setContacts] = useState(
      JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY)) ?? []
    );

  const addContact = contact => {
    if (hasAlreadyAdded(contact)) {
      Notiflix.Notify.info(`${contact.name} is already in contacts`)
      return
    }
       setContacts(prev => {
        const newContact = {
          id: nanoid(),
          ...contact,
        };
        return [...prev, newContact]
      });
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
    setContacts(prev => {
      return [...prev].filter(contact => contact.name !== name)
    });
  };

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(contacts)
    );
  }, [contacts])

  useEffect(() =>  {
    try {
    const AddedContacts = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY));
      if (AddedContacts) {
        setContacts(AddedContacts)
      }
    } catch (error) {
      setContacts([])
    }
    }, [])
  
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