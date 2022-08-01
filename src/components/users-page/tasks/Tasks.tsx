import React from 'react';

export const Tasks: React.FC = () => (
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
      <label htmlFor="checkbox" className="checkbox-label">
        <input id="checkbox" type="checkbox" className="input-checkbox" />
        Finish ticket update
      </label>
      <button type="button" className="btn btn--low">Urgent</button>
    </div>

    <div className="tickets__item">
      <label htmlFor="checkbox" className="checkbox-label">
        <input id="checkbox" type="checkbox" className="input-checkbox" />
        Create new ticket example
      </label>
      <button type="button" className="btn btn--normal">new</button>
    </div>

    <div className="tickets__item">
      <label htmlFor="checkbox" className="checkbox-label">
        <input checked id="checkbox" type="checkbox" className="input-checkbox" />
        Update ticket report
      </label>
      <button type="button" className="btn btn--default">default</button>
    </div>
  </div>
);
