import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../services/users';
import { User } from '../../types/types';

export const UserProfile: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!id || !Number.isInteger(+id)) {
      return;
    }

    getUser(+id).then(response => setUser(response.data));
  }, []);

  return (
    <div className="profile">
      <div className="profile__background">
        <div className="profile__background-image" />
        <img src={`images/users-photos/user-${user?.id}.png`} alt={user?.name} className="profile__avatar" />
        <h3 className="profile__user-name">{user?.name}</h3>
        <h4 className="profile__user-description">{user?.company.catchPhrase}</h4>
      </div>
      <div className="profile__info">
        <h3 className="profile__info-title">Address</h3>
        <p className="profile__details">
          {user?.address.street}
          ,
          {user?.address.suite}
          <br />
          {user?.address.city}
          ,
          {user?.address.zipcode}
        </p>
        <h3 className="profile__info-title">Phone</h3>
        <p className="profile__details">{user?.phone}</p>
        <h3 className="profile__info-title">Website</h3>
        <a className="profile__details profile__details--link" href={user?.website}>{user?.website}</a>
      </div>
    </div>
  );
};
