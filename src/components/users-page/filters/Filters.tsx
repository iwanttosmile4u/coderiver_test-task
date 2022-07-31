import React from 'react';
import { Filter, FilterProps } from './filter/Filter';

const filters: FilterProps[] = [
  {
    text: 'Active',
    value: 60,
    isActive: false,
  },
  {
    text: 'Online',
    value: 16,
    isActive: true,
  },
  {
    text: 'Filtered',
    value: 43,
    isActive: false,
  },
  {
    text: 'Banned',
    value: 64,
    isActive: false,
  },
];

export const Filters: React.FC = () => (
  <div className="tabs">
    {
      filters.map(filter => (
        <Filter
          key={filter.text}
          text={filter.text}
          value={filter.value}
          isActive={filter.isActive}
        />
      ))
    }
  </div>
);
