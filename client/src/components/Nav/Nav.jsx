import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import Auth from '../../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <Navbar expand="lg">
        <Nav variant='pills' defaultActiveKey="/" expand="lg" className='navbar'>
        <Container fluid>
          <Navbar.Brand id="title">
            Restauraunt Name
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} size="lg" style={{color: "#ffffff",}} />
            </Navbar.Toggle>
          <Navbar.Collapse id="navitems" className={`justify-content-end ${showNav ? 'show' : ''}`}>
            <Nav className="mr-auto">
            <Nav.Link exact as={Link} to="/" className='links' eventKey="link-1">
            Menu
          </Nav.Link>
              <Nav.Link as={Link} to="/meal/Breakfast" className='links' eventKey="link-2">
                Breakfast
              </Nav.Link>
              <Nav.Link as={Link} to="/meal/Lunch" className='links' eventKey="link-3">
                Lunch
              </Nav.Link>
              <Nav.Link as={Link} to="/meal/Dinner" className='links' eventKey="link-4">
                Dinner
              </Nav.Link>
              <Nav>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/orderhistory">
                    Order History
                  </Nav.Link>
                  <Nav.Link as={Link} to="/cart">
                    Cart
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)} className='links'>
                  Login/Sign Up to Order
                </Nav.Link>
              )}
            </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Nav>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size="md"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login" className="modal">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login" className='links'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup" className='links'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
