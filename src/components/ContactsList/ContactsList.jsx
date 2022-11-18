import React from 'react';
import PropTypes from 'prop-types';
import { Button, List, ListItem } from './ContactsListStyled';

export function ContactList({ data, deleteFromContacts }) {
  const contactsArray = data.contacts;
  console.log(data)
  const items = contactsArray.map(({ name, number, id }) => {
    return (
      <ListItem key={id}>
        Name: {name} Number: {number}
        <Button type="button" onClick={() => deleteFromContacts(name)}>
          Delete
        </Button>
      </ListItem>
    );
  });
  return <List>{items}</List>;
}


ContactList.propTypes = {
  data: PropTypes.objectOf(PropTypes.any)
};

