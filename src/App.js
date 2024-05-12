// archivo app principal             
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './components/Item/Item.js';
import Formulario from './components/formularios1/Formulario.js'
import Menu from './components/Menu/Menu.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import {initAddTasks} from './components/reducers/tasksSlice.js'
import { useEffect } from 'react';

function App() {
  
  const goals = useSelector((state)=>state.goals.Value);
  const dispash = useDispatch();


  function iniFetch() {
    fetch("http://localhost:3001/goals/getGoals", {
      method : "GET",
      headers : {
        "Content-Type" : "application/json",
        "Authorization" : "desarrolloDeAplicacionesWeb"
      },
    }).then((response)=>{
        return response.json();
    }).then((response)=>{
      response.map((tasks)=>{
        dispash((initAddTasks(response)))
      })
    }).catch((err)=>{
      console.log(err);
    })
  };

  useEffect(()=>{
    iniFetch();
  },[])

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
                   key={index}
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