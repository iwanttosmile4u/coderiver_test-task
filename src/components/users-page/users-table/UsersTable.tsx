import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../../types/types';
import { Level, LevelMarker } from '../../level-marker/LevelMarker';
import { getAllUsers } from '../../../services/users';

const getDistanceLevel = (user: User): Level => {
  const list = ['high', 'low', 'normal'];

  return list[user.id % list.length] as Level;
};

export const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers().then(response => setUsers(response.data));
  }, []);

  return (
    <div className="users">
      <div className="users__header">
        <h2 className="users__title">All users</h2>
        <div className="users__sorting">
          <img src="images/icons/sort.svg" alt="sorting" />
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
          {
            users.map((user) => {
              const level = getDistanceLevel(user);

              return (
                <tr className="row" key={user.id}>
                  <td className="row__item row__item--wide">
                    <Link to={`/${user.id}`}>
                      <div className="row__profile">
                        <img src={`images/users-photos/user-${user.id}.png`} alt={user.name} className="row__item-photo" />
                        <div className="row__profile-details">
                          <span className="row__profile-name">{user.name}</span>
                          <span className="row__profile-description">{user.address.city}</span>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="row__item">
                    <span className="row__profile-name">{user.company.name}</span>
                    <span className="row__profile-description">{user.company.bs}</span>
                  </td>
                  <td className="row__item">
                    <span className="row__profile-name">{user.email}</span>
                    <span className="row__profile-description">{user.website}</span>
                  </td>
                  <td className="row__item">
                    <LevelMarker level={level} text={level} />
                  </td>
                  <td className="row__item">
                    <img src="images/icons/three-dots.svg" alt="more info" />
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
