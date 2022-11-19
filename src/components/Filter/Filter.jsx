import { LabelFilter, InputFilter, Wrapper } from './FilterStyled';

import { getStatusFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/filterSlice';





export const Filter = () => {

  const filter = useSelector(getStatusFilter)
  const dispatch = useDispatch()



    const handleChange = e => {
      const { value } = e.target;
      dispatch(contactsFilter(value));
    };

  return (
    <Wrapper>
      <LabelFilter>
        Find contacts by name
        <InputFilter type="text" value={filter} onChange={handleChange} />
      </LabelFilter>
    </Wrapper>
  );
}
