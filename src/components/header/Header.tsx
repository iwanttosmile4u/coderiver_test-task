import React from 'react';

export const Header: React.FC = () => (
  <div className="header">
    <h1 className="header__title">Users</h1>
    <div className="header__details-container">
      <img src="images/icons/search.svg" alt="search icon" className="header__icon" />
      <img src="images/icons/notifications.svg" alt="notification icon" className="header__icon" />
      <div className="header__line"></div>
      <div className="header__user-details">
        <span className="header__user-name">Jones Ferdinand</span>
        <img src="images/users-photos/header_user.png" alt="user" />
      </div>
    </div>
  </div>
);
