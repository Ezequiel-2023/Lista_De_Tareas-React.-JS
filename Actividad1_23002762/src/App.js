// archivo app principal 
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './components/Item/Item.js';
import Formulario from './components/formularios1/Formulario.js'
import Menu from './components/Menu/Menu.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 
function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
      <Row>
        <Col>
          <Formulario></Formulario></Col>
        <Col>
          <Item></Item> 
          <Item></Item>
          <Item></Item>  
        </Col>
      </Row>
    </Container> 
    </div>
  );
}

export default App;
