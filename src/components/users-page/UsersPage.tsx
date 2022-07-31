import React from 'react';
import { UsersTable } from './users-table/UsersTable';
import { UnresolvedTickets } from './unresolved-tickets/UnresolvedTickets';
import { Tasks } from './tasks/Tasks';

export const UsersPage: React.FC = () => (
  <>
    <UsersTable />

    <div className="bottom-blocks main__bottom-blocks">
      <UnresolvedTickets />
      <Tasks />
    </div>
  </>
);
