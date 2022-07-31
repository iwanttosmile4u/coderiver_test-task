import React from 'react';

export const UnresolvedTickets: React.FC = () => (
  <>
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
  </>
);
