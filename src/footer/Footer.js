import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Quick Links</h4>
            <h1 className="list-unstyled">
              <li><Link>Message from Coordinator</Link></li>
              <li><Link>Alumni Services</Link></li>
              <li><Link>Alumni Gallery</Link></li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Important Links</h4>
            <ui className="list-unstyled">
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Help</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>For Alumni</h4>
            <ui className="list-unstyled">
              <li><Link to={'/login'}>Login or Signup</Link></li>
              <li><Link>Donation</Link></li>
              <li><Link>Send Invitation</Link></li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
           NIT Durgapur &copy;{new Date().getFullYear()} | All rights reserved |
            Sponsored by Mr. J.P.Bhattacharya(1982,EE)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;