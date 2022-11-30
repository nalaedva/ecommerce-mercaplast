import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

import logo from "../landing/logo.png"
import { CartFill, PersonFill } from 'react-bootstrap-icons';

function Header() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Explorar</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-dark" >
                <CartFill />
                <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </Button>
            
            <NavDropdown 
                      title={
                        <span>
                            <PersonFill />
                        </span>
                    }
                      
            id="collasible-nav-dropdown">
                
                
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign in</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }

export default Header;
