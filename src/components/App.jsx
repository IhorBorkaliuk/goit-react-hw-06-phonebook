import Notiflix from 'notiflix';

import { Filter } from './Filter/Filter';
import { Title } from './ContactsList/ContactsListStyled';
import { Form } from './Form/Form';
import { getStatusContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';


export function App() {
  // const dispatch = useDispatch();
  // const filter = useSelector(getStatusFilter);
  const contacts = useSelector(getStatusContacts);





  // const handleChange = e => {
  //   const { value } = e.target;
  //   dispatch(contactsFilter(value));
  // };

  // const onFilter = () => {
  //   if (!filter) {
  //     return contacts;
  //   }

  //   const filterToLowerCase = filter.toLowerCase();

  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filterToLowerCase)
  //   );
  // };


// console.log(contacts)
  return (
    <div>
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
    </div>
  );
}


Notiflix.Notify.init({
  position: 'center-top',
  timeout: 2000,
  clickToClose: true,
});