import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

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
      <Navbar bg="dark" variant="dark" expand="lg" className='navbar'>
        <Container fluid>
          <Navbar.Brand id="title">
            Restauraunt Name
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" onClick={handleToggle} />
          <Navbar.Collapse id="navitems" className={`justify-content-end ${showNav ? 'show' : ''}`}>
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
            Menu
          </Nav.Link>
              <Nav.Link as={Link} to="/meal/Breakfast">
                Breakfast
              </Nav.Link>
              <Nav.Link as={Link} to="/meal/Lunch">
                Lunch
              </Nav.Link>
              <Nav.Link as={Link} to="/meal/Dinner">
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
                <Nav.Link onClick={() => setShowModal(true)}>
                  Login/Sign Up to Order
                </Nav.Link>
              )}
            </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
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
