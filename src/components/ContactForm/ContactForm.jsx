import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Form,
  Wrapper,
  Input,
  Button,
  ImgLabel,
  Img,
  RadioButtonWtapper,
  RadioButton,
} from './ContactForm.styled';
import { ReactComponent as IconAdd } from '../../img/plus.svg';

import {
  useAddContactMutation,
  useQueryState,
} from '../../redux/contacts/contactsSlise';
import { Spiner } from 'components/Spiner/Spiner';

const AVATARS_IMAGE = [
  { id: 1, img: 'http://placeimg.com/640/480/fashion' },
  { id: 2, img: 'http://placeimg.com/640/480/animals' },
  { id: 3, img: 'http://placeimg.com/640/480/business' },
  { id: 4, img: 'http://placeimg.com/640/480/food' },
  { id: 5, img: 'http://placeimg.com/640/480/people' },
];

export const ContactForm = () => {
  const [name, setName] = useState('Bohdan Vozniak');
  const [phone, setPhone] = useState('+380990172235');

  const [addContact, { isLoading: isAdd }] = useAddContactMutation();
  const { data: contacts } = useQueryState();

  const handleSubmit = e => {
    e.preventDefault();
    const avatar = e.currentTarget.img.value;
    const isOnline = Math.random() < 0.5;
    if (contacts.findIndex(contact => contact.name === name) !== -1) {
      toast.error(`🦄 Wow so easy! ${name} is already in contacts`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    addContact({ name, phone, avatar, isOnline });
    reset();
  };

  const handleChange = e => {
    const currentTarget = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (currentTarget) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        throw Error(`CurrentTarget ${currentTarget} is invalid`);
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={phone}
          />
        </div>
        <Button type="submit">
          {isAdd ? (
            <Spiner size="40px" />
          ) : (
            <IconAdd fill="#ffffff" width="50px" height="50px" />
          )}
        </Button>
      </Wrapper>

      <RadioButtonWtapper>
        {AVATARS_IMAGE.map(({ id, img }) => {
          return (
            <ImgLabel key={id}>
              <RadioButton type="radio" name="img" value={img} required />
              <Img src={img} width="80px" height="80px" alt="Avatar" />
            </ImgLabel>
          );
        })}
      </RadioButtonWtapper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Form>
  );
};
