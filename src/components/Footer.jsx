import React from 'react';
import logo from '../assets/logoblack.svg';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-section py-4'>
      
        <div className='row justify-content-between align-items-center'>
          <div className='col-auto d-flex align-items-center'>
            <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-top"
              width={40}
              height={41}
            />
            <div className='logo-name text-dark '>Yogi Youssef</div>
          </div>

          <div className='col-auto d-flex flex-wrap justify-content-center gap-4 my-3 my-sm-0'>
            <Link className='footer-link'>Home</Link>
            <Link className='footer-link'>About</Link>
            <Link className='footer-link'>Classes</Link>
            <Link className='footer-link'>Events</Link>
            <Link className='footer-link'>Personal Training</Link>
            <Link className='footer-link'>Contact</Link>
          </div>

          <div className='col-auto d-flex gap-3 mt-3 '>
            <FaInstagram size={20} />
            <FaWhatsapp size={20} />
            <FaTiktok size={20} />
          </div>
        </div>

        <div className='row justify-content-between mt-3'>
          <div className='col-auto'>
            <a className='footer-policy-link' href='#'>Terms & Conditions</a>
          </div>

          <div className='col-auto d-flex gap-4'>
            <a className='footer-policy-link' href='#'>Conditions</a>
            <a className='footer-policy-link' href='#'>Privacy Policy</a>
          </div>
        
      </div>
    </div>
  );
}

export default Footer;
