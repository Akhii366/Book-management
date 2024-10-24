import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import store from './redux/store';
import AddEditBook from './pages/AddEditBook';
import EditBookPage from './pages/EditBookPage';
import BookListPage from './pages/BookListPage';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">Book Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/add">Add Book</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: '100vh', width: '1500px' }}
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <Routes>
              <Route path="/" element={<BookListPage />} />
              <Route path="/add" element={<AddEditBook />} />
              <Route path="/edit/:id" element={<EditBookPage />} />
            </Routes>
          </div>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
