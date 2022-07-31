import React from 'react';
import { NavigationLink, NavigationLinkProps } from './link/NavigationLink';

const mainLinks: NavigationLinkProps[] = [
  {
    link: '#overview',
    img: 'images/icons/overview.svg',
    text: 'Overview',
    isActive: false,
    isBordered: false,
  },
  {
    link: '/',
    img: 'images/icons/users.svg',
    text: 'Users',
    isActive: true,
    isBordered: false,
  },
  {
    link: '#overview',
    img: 'images/icons/ideas.svg',
    text: 'Ideas',
    isActive: false,
    isBordered: false,
  },
  {
    link: '#overview',
    img: 'images/icons/agents.svg',
    text: 'Agents',
    isActive: false,
    isBordered: false,
  },
  {
    link: '#overview',
    img: 'images/icons/articles.svg',
    text: 'Articles',
    isActive: false,
    isBordered: true,
  },
  {
    link: '#overview',
    img: 'images/icons/settings.svg',
    text: 'Settings',
    isActive: false,
    isBordered: false,
  },
  {
    link: '#overview',
    img: 'images/icons/subscription.svg',
    text: 'Subscriptions',
    isActive: false,
    isBordered: false,
  },
];

export const Navigation: React.FC = () => (
  <div className="sidebar body__sidebar">
    <div className="sidebar__logo">
      <img src="images/logo.png" alt="Logo" className="sidebar__img" />
      <h2 className="sidebar__title">Dashboard</h2>
    </div>
    <nav className="menu">
      <ul className="menu__list">
        {
          mainLinks.map(link => (
            <NavigationLink
              key={link.text}
              text={link.text}
              img={link.img}
              link={link.link}
              isActive={link.isActive}
              isBordered={link.isBordered}
            />
          ))
        }
      </ul>
    </nav>
  </div>
);
