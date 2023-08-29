import React from 'react';
import '../styles/pop.css'
import { Link, useNavigate } from 'react-router-dom';
import {GiPartyPopper} from 'react-icons/gi'

const Pop = ({ onClose, content }) => {
    
  return (
    <div className="popup">
      <div className="popup-content">
        <div style={{fontSize:"50px", color:"green"}}><GiPartyPopper/></div>
        <p>Payment successful</p>
        <button className="close-btn" onClick={onClose} >
          <Link to='/'>Continue shopping</Link>
        </button>

        {content}
      </div>
    </div>
  );
};

export default Pop;
