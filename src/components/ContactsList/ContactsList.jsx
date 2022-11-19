import React from 'react';
import PropTypes from 'prop-types';
import { Button, List, ListItem, LabelText } from './ContactsListStyled';
import { useDispatch } from 'react-redux';
import { deleteOneContact } from 'redux/contactsSlice';

export function ContactList({ contacts }) {
  const dispatch = useDispatch();
  console.log(contacts);
  const item = contacts.map(({ name, number, id }) => {
    return (
      <ListItem key={id}>
        <LabelText>Name: {name}</LabelText> <LabelText>Number: {number}</LabelText>
        <Button type="button" onClick={() => dispatch(deleteOneContact(name))}>
          Delete
        </Button>
      </ListItem>
    );
  });
  return <List>{item}</List>;
}


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
