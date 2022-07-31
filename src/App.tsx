import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Navigation } from './components/navigation/Navigation';
import { Header } from './components/header/Header';
import { UsersPage } from './components/users-page/UsersPage';
import { UserProfile } from './components/user-profile/UserProfile';
import { Filters } from './components/users-page/filters/Filters';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="app">
        <Navigation />
        <main className="main body__main">
          <Header />
          <Filters />
          <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path=":id" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};
