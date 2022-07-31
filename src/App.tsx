import React from 'react';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="sidebar body__sidebar">
        <div className="sidebar__logo">
          <img src="./images/logo.png" alt="Logo" className="sidebar__img" />
          <h2 className="sidebar__title">Dashboard</h2>
        </div>

        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#overview" className="menu__link">
                <img src="./images/icons/overview.svg" alt="overview" className="menu__link-icon" />
                <span className="menu__link-text">Overview</span>
              </a>
            </li>
            <li className="menu__item menu__item--active">
              <a href="#overview" className="menu__link menu__link--active">
                <img src="./images/icons/users.svg" alt="overview" className="menu__link-icon" />
                <span className="menu__link-text">Users</span>
              </a>
            </li>
            <li className="menu__item">
              <a href="#overview" className="menu__link">
                <img src="./images/icons/ideas.svg" alt="overview" className="menu__link-icon" />
                <span className="menu__link-text">Ideas</span>
              </a>
            </li>
            <li className="menu__item">
              <a href="#overview" className="menu__link">
                <img src="./images/icons/contacts.svg" alt="overview" className="menu__link-icon" />
                <span className="menu__link-text">Contacts</span>
              </a>
            </li>
            <li className="menu__item">
              <a href="#overview" className="menu__link">
                <img src="./images/icons/agents.svg" alt="overview" className="menu__link-icon" />
                <span className="menu__link-text">Agents</span>
              </a>
            </li>
            <li className="menu__item menu__item--bordered">
              <a href="#overview" className="menu__link">
                <img src="./images/icons/articles.svg" alt="overview" className="menu__link-icon" />
                <span className="menu__link-text">Articles</span>
              </a>
            </li>
            <li className="menu__item">
              <a href="#overview" className="menu__link">
                <img src="./images/icons/settings.svg" alt="overview" className="menu__link-icon" />
                <span className="menu__link-text">Settings</span>
              </a>
            </li>
            <li className="menu__item">
              <a href="#overview" className="menu__link">
                <img src="./images/icons/subscription.svg" alt="overview" className="menu__link-icon" />
                <span className="menu__link-text">Subscription</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="main body__main">
        <div className="header">
          <h1 className="header__title">Users</h1>
          <div className="header__details-container">
            <img src="./images/icons/search.svg" alt="search icon" className="header__icon" />
            <img src="./images/icons/notifications.svg" alt="notification icon" className="header__icon" />
            <div className="header__line"></div>
            <div className="header__user-details">
              <span className="header__user-name">Jones Ferdinand</span>
              <img src="./images/users-photos/header_user.png" alt="user" />
            </div>
          </div>
        </div>

        <div className="tabs">
          <div className="tabs__item">
            <span className="tabs__text">Active</span>
            <span className="tabs__number">60</span>
          </div>

          <div className="tabs__item tabs__item--active">
            <span className="tabs__text tabs__text--active">Online</span>
            <span className="tabs__number tabs__number--active">16</span>
          </div>

          <div className="tabs__item">
            <span className="tabs__text">Filtered</span>
            <span className="tabs__number">43</span>
          </div>

          <div className="tabs__item">
            <span className="tabs__text">Banned</span>
            <span className="tabs__number">64</span>
          </div>
        </div>

        <div className="users">
          <div className="users__header">
            <h2 className="users__title">All users</h2>
            <div className="users__sorting">
              <img src="./images/icons/sort.svg" alt="sorting" />
              <span className="users__header-text">Sort</span>
            </div>
          </div>

          <table className="table users__table">
            <thead className="table__head">
              <tr className="table__row">
                <th className="table__header">User details</th>
                <th className="table__header">Company name</th>
                <th className="table__header">Email</th>
                <th className="table__header">Distance</th>
              </tr>
            </thead>
            <tbody className="table__body">
              <tr className="row">
                <td className="row__item row__item--wide">
                  <a href="#user">
                    <div className="row__profile">
                      <img src="./images/users-photos/user-1.png" alt="user" className="row__item-photo" />
                      <div className="row__profile-details">
                        <span className="row__profile-name">Leanne Graham</span>
                        <span className="row__profile-description">Gwenborough</span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">Microsoft</span>
                  <span className="row__profile-description">harness real-time e-markets</span>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">asd@asd.asd</span>
                  <span className="row__profile-description">hildegard.org</span>
                </td>
                <td className="row__item">
                  <button type="button" className="btn btn--high">high</button>
                </td>
                <td className="row__item">
                  <img src="./images/icons/three-dots.svg" alt="more info" />
                </td>
              </tr>

              <tr className="row">
                <td className="row__item row__item--wide">
                  <a href="#user">
                    <div className="row__profile">
                      <img src="./images/users-photos/user-2.png" alt="user" className="row__item-photo" />
                      <div className="row__profile-details">
                        <span className="row__profile-name">Leanne Graham</span>
                        <span className="row__profile-description">London</span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">Apple</span>
                  <span className="row__profile-description">harness real-time e-markets</span>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">asd@asd.asd</span>
                  <span className="row__profile-description">hildegard.org</span>
                </td>
                <td className="row__item">
                  <button type="button" className="btn btn--low">low</button>
                </td>
                <td className="row__item">
                  <img src="./images/icons/three-dots.svg" alt="more info" />
                </td>
              </tr>

              <tr className="row">
                <td className="row__item row__item--wide">
                  <a href="#user">
                    <div className="row__profile">
                      <img src="./images/users-photos/user-3.png" alt="user" className="row__item-photo" />
                      <div className="row__profile-details">
                        <span className="row__profile-name">Leanne Graham</span>
                        <span className="row__profile-description">Paris</span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">Something</span>
                  <span className="row__profile-description">harness real-time e-markets</span>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">asd@asd.asd</span>
                  <span className="row__profile-description">hildegard.org</span>
                </td>
                <td className="row__item">
                  <button type="button" className="btn btn--high">high</button>
                </td>
                <td className="row__item">
                  <img src="./images/icons/three-dots.svg" alt="more info" />
                </td>
              </tr>

              <tr className="row">
                <td className="row__item row__item--wide">
                  <a href="#user">
                    <div className="row__profile">
                      <img src="./images/users-photos/user-4.png" alt="user" className="row__item-photo" />
                      <div className="row__profile-details">
                        <span className="row__profile-name">Leanne Graham</span>
                        <span className="row__profile-description">Paris</span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">Ukr.net</span>
                  <span className="row__profile-description">harness real-time e-markets</span>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">asd.asd@asd.asd</span>
                  <span className="row__profile-description">hildegard.org</span>
                </td>
                <td className="row__item">
                  <button type="button" className="btn btn--normal">Normal</button>
                </td>
                <td className="row__item">
                  <img src="./images/icons/three-dots.svg" alt="more info" />
                </td>
              </tr>

              <tr className="row">
                <td className="row__item row__item--wide">
                  <a href="#user">
                    <div className="row__profile">
                      <img src="./images/users-photos/user-5.png" alt="user" className="row__item-photo" />
                      <div className="row__profile-details">
                        <span className="row__profile-name">Leanne Graham</span>
                        <span className="row__profile-description">Kyiv</span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">guardian</span>
                  <span className="row__profile-description">harness real-time e-markets</span>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">asd@asd.asd</span>
                  <span className="row__profile-description">hildegard.org</span>
                </td>
                <td className="row__item">
                  <button type="button" className="btn btn--high">high</button>
                </td>
                <td className="row__item">
                  <img src="./images/icons/three-dots.svg" alt="more info" />
                </td>
              </tr>

              <tr className="row">
                <td className="row__item row__item--wide">
                  <a href="#user">
                    <div className="row__profile">
                      <img src="./images/users-photos/user-6.png" alt="user" className="row__item-photo" />
                      <div className="row__profile-details">
                        <span className="row__profile-name">Leanne Graham</span>
                        <span className="row__profile-description">New York</span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">nytimes</span>
                  <span className="row__profile-description">harness real-time e-markets</span>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">asd@asd.asd</span>
                  <span className="row__profile-description">hildegard.org</span>
                </td>
                <td className="row__item">
                  <button type="button" className="btn btn--normal">Normal</button>
                </td>
                <td className="row__item">
                  <img src="./images/icons/three-dots.svg" alt="more info" />
                </td>
              </tr>

              <tr className="row">
                <td className="row__item row__item--wide">
                  <a href="#user">
                    <div className="row__profile">
                      <img src="./images/users-photos/user-7.png" alt="user" className="row__item-photo" />
                      <div className="row__profile-details">
                        <span className="row__profile-name">Leanne Graham</span>
                        <span className="row__profile-description">Lviv</span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">company</span>
                  <span className="row__profile-description">harness real-time e-markets</span>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">asd@asd.asd</span>
                  <span className="row__profile-description">hildegard.org</span>
                </td>
                <td className="row__item">
                  <button type="button" className="btn btn--low">low</button>
                </td>
                <td className="row__item">
                  <img src="./images/icons/three-dots.svg" alt="more info" />
                </td>
              </tr>

              <tr className="row">
                <td className="row__item row__item--wide">
                  <a href="#user">
                    <div className="row__profile">
                      <img src="./images/users-photos/user-8.png" alt="user" className="row__item-photo" />
                      <div className="row__profile-details">
                        <span className="row__profile-name">Leanne Graham</span>
                        <span className="row__profile-description">Kherson</span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">etc</span>
                  <span className="row__profile-description">harness real-time e-markets</span>
                </td>
                <td className="row__item">
                  <span className="row__profile-name">asd@asd.asd</span>
                  <span className="row__profile-description">hildegard.org</span>
                </td>
                <td className="row__item">
                  <button type="button" className="btn btn--normal">Normal</button>
                </td>
                <td className="row__item">
                  <img src="./images/icons/three-dots.svg" alt="more info" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bottom-blocks main__bottom-blocks">
          <div className="tickets bottom-blocks__tickets">
            <div className="tickets__header">
              <div className="tickets__header-details">
                <h2 className="tickets__title">Unresolved tickets</h2>
                <span className="tickets__description">Group: </span>
                <span className="tickets__description tickets__description--black">Support</span>
              </div>
              <a href="#/" className="tickets__link">View details</a>
            </div>
            <div className="tickets__item">
              <span className="tickets__item-text">Waiting on Feature Request</span>
              <span className="tickets__item-amount">4238</span>
            </div>

            <div className="tickets__item">
              <span className="tickets__item-text">Awaiting Customer Response</span>
              <span className="tickets__item-amount">1005</span>
            </div>

            <div className="tickets__item">
              <span className="tickets__item-text">Awaiting Developer Fix</span>
              <span className="tickets__item-amount">914</span>
            </div>

            <div className="tickets__item">
              <span className="tickets__item-text">Pending</span>
              <span className="tickets__item-amount">281</span>
            </div>
          </div>

          <div className="tickets bottom-blocks__tickets">
            <div className="tickets__header">
              <div className="tickets__header-details">
                <h2 className="tickets__title">Tasks</h2>
                <span className="tickets__description">Today</span>
              </div>
              <a href="#/" className="tickets__link">View all</a>
            </div>
            <div className="tickets__item">
              <span className="tickets__item-text tickets__item-text--lighter">Create new task</span>
              <button type="button" className="btn btn--plus">+</button>
            </div>

            <div className="tickets__item">
              <span className="tickets__item-text">Awaiting Developer Fix</span>
              <button type="button" className="btn btn--low">Urgent</button>
            </div>

            <div className="tickets__item">
              <span className="tickets__item-text">Awaiting Developer Fix</span>
              <button type="button" className="btn btn--normal">new</button>
            </div>

            <div className="tickets__item">
              <span className="tickets__item-text">Pending</span>
              <button type="button" className="btn btn--default">default</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
