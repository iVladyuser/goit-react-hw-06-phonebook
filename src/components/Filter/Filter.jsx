import React from 'react';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled'

const Filter = ({ value, onChange }) => (
  <FilterContainer>
    <FilterLabel>
      Find contact by name
      <FilterInput
        type="text"
        value={value}
        placeholder="Enter name..."
        onChange={e => onChange(e.target.value)}
      />
    </FilterLabel>
  </FilterContainer>
);

export default Filter;
