import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/Container/Container';

export const App = () => {
  return (
    <>
      <Container>
        <ContactForm />
      </Container>
      <Container>
        <Filter />
      </Container>

      <ContactList />
    </>
  );
};
