import { useDispatch, useSelector } from 'react-redux';

import { Input } from './Filter.styled';

import { changeFilter } from 'components/redux/contacts/contacts-actions';

export const Filter = () => {
  const tag = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <Input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Filter"
      placeholder="Filter"
      required
      value={tag}
      onChange={e => dispatch(changeFilter(e.target.value))}
    />
  );
};
