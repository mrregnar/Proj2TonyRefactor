import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

// import Login from './components/Login'
// import AddItem from './components/AddItem'
// import UserRegistration from './components/AddUser'
// import ListItems from './components/ListItems'
// import Home from './components/Home'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>FoodGrid</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {/* the icons are from font-awesome in cdnjs.com */}
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fal fa-signgint'></i>Login
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/register'>
                <Nav.Link>
                  <i className='fal fa-user-plus'></i>SignUp
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/listitems'>
                <Nav.Link>
                  <i className='fal fa-list'></i>List Items
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/additem'>
                <Nav.Link>
                  <i className='fal fa-plus'></i>Add Items
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
