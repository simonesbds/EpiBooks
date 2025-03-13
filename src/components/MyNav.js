import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const MyNav = ({ searchQuery, setSearchQuery }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar expand="lg" className={`main-navbar ${theme}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          EpiBooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end align-items-center">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/browse">Browse</Nav.Link>
          </Nav>
          <Form.Control
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar ms-3"
          />
          <span className="theme-toggle-btn ms-3" onClick={toggleTheme} role="button" title="Toggle Theme">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;