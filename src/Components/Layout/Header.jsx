import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdb-react-ui-kit';
import wisePl from '../../assets/WisePl.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Styles/Style.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true); // Set fixed state when scrolled
    } else {
      setIsFixed(false); // Remove fixed state when at the top
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []);

  return (
    <>
      <header className={`header ${isFixed ? 'fixed' : ''}`}>
        <div className="topbar clearfix">
          <div className="container">
            <div className="row-fluid">
              <div className="col-md-6 col-sm-6 text-left">
                <p>
                  <strong>
                    <i className="fa fa-phone" style={{ color: '#F7C04A' }} />
                  </strong>{' '}
                  +65 8945 6089 &nbsp;&nbsp;
                  <strong>
                    <i className="fa fa-envelope" style={{ color: '#F7C04A' }} />
                  </strong>{' '}
                  <a href="mailto:info@yoursite.com">pleducationcentere@yahoo.com</a>
                </p>
              </div>

              {/* This section will be visible on both desktop and mobile */}
              <div className="col-md-6 col-sm-6 text-right social-container">
                <div
                  className="social"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Link
                    className="youtube"
                    to="https://youtube.com/@petersplim?si=BOl0c-jtyp27qIEM"
                    title="YouTube"
                  >
                    <i className="fab fa-youtube" />
                  </Link>
                  <Link className="avatar" to="/admin" title="Profile">
                    <i
                      className="fas fa-user-circle"
                      style={{ marginLeft: '20px' }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <nav className="navbar navbar-default yamm">
            <div
              className="navbar-header"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <div className="logo-normal">
                <Link className="navbar-brand" to="/" style={{ display: 'flex' }}>
                  <img
                    src={wisePl}
                    alt="WisePl_logo"
                    style={{ borderRadius: '5px', marginBottom: '450px' }}
                  />
                </Link>
              </div>
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
                style={{ marginLeft: 'auto' }}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>

            <div id="navbar" className="navbar-collapse collapse">
              <ul
                className="nav navbar-nav navbar-right"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  flex: 1,
                }}
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li className="dropdown yamm-fw yamm-half">
                  <Link
                    to="/programs"
                    className="dropdown-toggle active"
                    data-toggle="dropdown"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link to="/videos">Videos</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* CSS Media Query for Mobile */}
      <style>
        {`
          @media (max-width: 767px) {
            .social-container {
              display: flex;
              flex-direction: column;
              align-items: center; /* Center the icons */
              margin-top: 10px;
            }

            .social {
              margin-top: 10px;
              justify-content: center; /* Center the social links on mobile */
              align-items: center;
            }

            .social a {
              margin-right: 10px; /* Add space between icons */
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
