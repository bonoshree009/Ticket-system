import React from 'react';

const Footer = () => {
    return (
        <>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 ">
  <nav>
    <h6 className="footer-title">CS — Ticket System</h6>
    <p >Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem  <br />
    Ipsum has been the industry's standard <br />dummy text ever since the 1500s, when an <br />unknown printer took a galley of type and <br /> scrambled it to make a type specimen book.</p>

  </nav>
  <nav className='flex-1'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover"> Contact Saled</a>

  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Download Apps</a>
  </nav>

    <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
  </nav>
    <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover">@CS — Ticket System</a>
    <a className="link link-hover">@CS — Ticket System</a>
    <a className="link link-hover">@CS — Ticket System</a>
    <a className="link link-hover">support@cst.com</a>
  </nav>
</footer>
<div className='bg-black text-white text-center py-5 border-t-1 border-gray-600'><p>© 2025 CS — Ticket System. All rights reserved.</p></div>
</>
    );
};

export default Footer;