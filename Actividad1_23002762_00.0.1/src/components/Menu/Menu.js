// archivo js para el componente menu
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.scss'
import { useDispatch } from 'react-redux';
import {changeOption} from '../reducers/optionsSlice'


function Menu() {
  const dispatch = useDispatch();
  const changeOptionFunc = (value)=>{
    dispatch(changeOption(value));
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tareas y Metas </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={changeOptionFunc}>Tareas</Nav.Link>
            <Nav.Link href="#link" >Metas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;