import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'black', color:'white', padding: 20, fontSize: 20, fontWeight: 'bold' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px', position: 'relative' }} onClick={toggleDropdown}>
        <Link to="#">Planets</Link>
          {isOpen && (
            <ul style={{ position: 'absolute', fontSize:15, borderRadius:10, top: '100%', left: 0, backgroundColor: 'black', color:'white', padding: '10px', minWidth: '100px', zIndex: '999' }}>
              <li><Link to="/earth">Earth</Link></li>
              <li><Link to="/mars">Mars</Link></li>
              <li><Link to="/saturn">Saturn</Link></li>
              <li><Link to="/jupiter">Jupiter</Link></li>
              <li><Link to="/venus">Venus</Link></li>
              <li><Link to="/uranus">Uranus</Link></li>
              <li><Link to="/neptune">Neptune</Link></li>
              <li><Link to="/mercury">Mercury</Link></li>
            </ul>
          )}
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/sun">Sun</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/moon">Moon</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
