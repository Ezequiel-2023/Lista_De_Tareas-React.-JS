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
import { useSelector } from 'react-redux';

 
function App() {
 const goals = useSelector((state)=>state.goals.Value);
  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col>
            <Formulario />
          </Col>
          <Col>
            <div>
              {goals.map((task1, index) => (
                <Item
                  name={task1.name}
                  description={task1.description}
                  dueDate={task1.dueDate}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;