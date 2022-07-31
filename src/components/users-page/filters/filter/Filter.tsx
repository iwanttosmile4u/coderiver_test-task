import React from 'react';

export interface FilterProps {
  text: string,
  value: string | number,
  isActive: boolean,
}

export const Filter: React.FC<FilterProps> = ({ text, value, isActive }) => (
  <div className={`tabs__item ${isActive ? 'tabs__item--active' : ''}`}>
    <span className={`tabs__text ${isActive ? 'tabs__text--active' : ''}`}>{text}</span>
    <span className={`tabs__number ${isActive ? 'tabs__number--active' : ''}`}>{value}</span>
  </div>
);
