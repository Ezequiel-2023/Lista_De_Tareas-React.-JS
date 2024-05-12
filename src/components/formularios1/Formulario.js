// archivo js componente para el formulario

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss'
import { useDispatch } from 'react-redux';
import { addGoal } from '../reducers/goalsSlice';
import { useRef } from 'react';



function Formulario(props) {
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDate = useRef();

  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();
    // Captura los valores de los input
    const name = inputRefName.current.value;
    const description = inputRefDescription.current.value;
    const dueDate = inputRefDate.current.value;

    // Despacha la acción para agregar el goal
    dispatch(addGoal({
      name: name,
      description: description,
      dueDate: dueDate
    }));

    // Limpia los campos del formulario
    inputRefName.current.value = "";
    inputRefDescription.current.value = "";
    inputRefDate.current.value = "";
  }

  return (
    <Form className="custom-form-style">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre De Actividad.</Form.Label>
        <Form.Control type="text" placeholder="¿cómo se llama la actividad?" ref={inputRefName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="agregue una descripción" ref={inputRefDescription}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Fecha de Entrega</Form.Label>
        <Form.Control type="date" placeholder="agregue una fecha" ref={inputRefDate}/>
      </Form.Group>
    
      <Button variant="primary" onClick={addItem} type="submit">Agregar </Button>
    </Form>
  );
}

export default Formulario;
