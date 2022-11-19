import PropTypes from 'prop-types';
import { LabelFilter, InputFilter, Wrapper } from './FilterStyled';

import { getStatusFilter } from 'redux/selectors';
import { getStatusContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/filterSlice';
import { ContactList } from 'components/ContactsList/ContactsList';





export const Filter = ({ value }) => {

  const filter = useSelector(getStatusFilter)
  const contacts = useSelector(getStatusContacts);
  const dispatch = useDispatch()



    const handleChange = e => {
      const { value } = e.target;
      dispatch(contactsFilter(value));
    };

    const onFilter = () => {
      if (!filter) {
        return contacts;
      }

      const filterToLowerCase = filter.toLowerCase();

      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterToLowerCase)
      );
  };
  

  return (
    <Wrapper>
      <LabelFilter>
        Find contacts by name
        <InputFilter type="text" value={filter} onChange={handleChange} />
      </LabelFilter>
      <ContactList contacts={onFilter()} />
    </Wrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
