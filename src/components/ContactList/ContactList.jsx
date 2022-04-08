import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/contacts/contactsSlise';
import { Ul } from './ContactList.styled';

import { Contact } from 'components/ContactList/Contact/Contact';
import { Container } from 'components/Container/Container';
import { Spiner } from 'components/Spiner/Spiner';

export const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();

  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();
  const isVisibleContacts = Boolean(data);

  const contacts = data
    ? data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    : [];

  return (
    <Container>
      {isFetching ? (
        <Spiner size="40px" dotsColor="#333" />
      ) : (
        <Ul>
          {isVisibleContacts &&
            contacts.map(({ id, name, phone, avatar, isOnline }) => {
              return (
                <Contact
                  key={id}
                  id={id}
                  name={name}
                  number={phone}
                  avatar={avatar}
                  isOnline={isOnline}
                />
              );
            })}
        </Ul>
      )}
    </Container>
  );
};
