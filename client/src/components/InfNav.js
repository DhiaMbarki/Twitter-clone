import React from 'react';
import { NavLink } from 'react-router-dom';

const InfNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to='/' exact activeClassName="active-left-nav">
<h3 className="mov1">Home</h3>          </NavLink>
          <br/>
          <NavLink to='/trending' exact activeClassName="active-left-nav">
          <h3 className="mov2">Bookmarks</h3>           </NavLink>
          <br/>
          <NavLink to='/profil' exact activeClassName="active-left-nav">
          <h3 className="mov3">profile</h3>          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default InfNav;