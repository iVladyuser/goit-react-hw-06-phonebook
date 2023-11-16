import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterContact} from '../../redux/contacts/filterSlice'
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled'

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filterStore);

  const changeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterContact(value));
  };

  <FilterContainer>
    <FilterLabel>
      Find contact by name
      <FilterInput
        type="text"
        value={filter}
        placeholder="Enter name..."
        onChange={changeFilter}
      />
    </FilterLabel>
  </FilterContainer>
};

export default Filter;
