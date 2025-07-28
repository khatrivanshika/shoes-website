import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Ryst</div>
  <div className="p-2">
        <div className="icons">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
      <div className="end-section">
        <button className="btn">Log In</button>
        <button className="btn">Menu</button>
      </div>
  </div>
  <div className="small-screen">
 
    <div className="icons">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faCartShopping} />
       
      </div>
        <h1>  ☰</h1>
  </div>
    </div>
  );
}

export default Navbar;
