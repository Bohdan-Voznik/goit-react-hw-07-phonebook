import PropTypes from 'prop-types';

import {
  Li,
  Img,
  Table,
  Td,
  Span,
  Name,
  Status,
  Delete,
} from './Contact.styled';
import { ReactComponent as IconDelete } from '../../../img/cross.svg';
import { Spiner } from 'components/Spiner/Spiner';
import { useDeleteContactMutation } from '../../../redux/contacts/contactsSlise';

export const Contact = ({ id, name, number, avatar, isOnline }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Li>
      <Status isOnline={isOnline} />
      <Img src={avatar} width="80px" height="80px" alt={`Avatar of ${name}`} />
      <Table>
        <tbody>
          <tr>
            <Td>
              <Span>Name:</Span>
            </Td>
            <Td>
              <Name>{name.length > 15 ? `${name.slice(0, 13)}...` : name}</Name>
            </Td>
          </tr>
          <tr>
            <td>
              <Span>Phone:</Span>
            </td>
            <td>{number}</td>
          </tr>
        </tbody>
      </Table>

      <Delete
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        {' '}
        {isDeleting ? (
          <Spiner />
        ) : (
          <IconDelete fill="#ffffff" width="12px" height="12px" />
        )}
      </Delete>
    </Li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
