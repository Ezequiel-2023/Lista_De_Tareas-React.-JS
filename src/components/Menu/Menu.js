// archivo js para el componente menu
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.scss'
import { useDispatch, useSelector } from 'react-redux';
import {changeOption} from '../reducers/optionsSlice'


function Menu() {
  const option = useSelector((state) => state.option);
  const dispatch = useDispatch();
  const changeOptionFunc = (e) => {
    e.preventDefault();
    if (option === 'tasks') {
      dispatch(changeOption({ option: 'goals' })); 
    } else {
      dispatch(changeOption({ option: 'tasks' }));
    }
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tareas y Metas </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" defaultActiveKey={option}>
            <Nav.Link href="#tasks" eventKey='tasks' onClick={changeOptionFunc}>Tareas</Nav.Link>
            <Nav.Link href="#goals" eventKey='goals' onClick={changeOptionFunc}>Metas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;