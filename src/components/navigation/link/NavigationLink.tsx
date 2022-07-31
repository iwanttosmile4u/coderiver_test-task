import React from 'react';
import { Link } from 'react-router-dom';

export interface NavigationLinkProps {
  link: string,
  img: string,
  text: string,
  isActive: boolean,
  isBordered: boolean | null,
}

export const NavigationLink: React.FC<NavigationLinkProps> = (props) => (
  <li className={`menu__item ${props.isBordered ? 'menu__item--bordered' : ''}`}>
    <Link to={props.link} className={`menu__link ${props.isActive ? 'menu__link--active' : ''}`}>
      <img src={props.img} alt={props.text} className="menu__link-icon" />
      <span className="menu__link-text">{props.text}</span>
    </Link>
  </li>
);
