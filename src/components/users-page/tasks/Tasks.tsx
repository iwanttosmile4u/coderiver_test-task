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
);
