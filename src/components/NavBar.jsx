import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { searchUser } from '../features/userDetailsSlice';

function NavBar() {
  const [searchData, setSearchDate] = useState('');
  const dispatch = useDispatch();

  const allUsers = useSelector(state => state.app.users)

  useEffect(() => {
    dispatch(searchUser(searchData))
  }, [searchData, dispatch]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-red">
      <Container>
        <Navbar.Brand href="/">RTQ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='text-decoration-none text-secondary'>Create Post</Link>
            <Link to='/all-user' className='text-decoration-none text-secondary ms-2'>All User ({allUsers.length})</Link>
          </Nav>

          <Form >
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearchDate(e.target.value)}
                />
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;