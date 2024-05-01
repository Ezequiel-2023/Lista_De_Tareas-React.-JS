// archivo js componente para el formulario

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss'


function Formulario() {
  return (
    <Form className="custom-form-style">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre De Actividad.</Form.Label>
        <Form.Control type="text" placeholder="" /></Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Descripcion</Form.Label>
        <Form.Control type="text" placeholder="" /></Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Fecha de Entrega</Form.Label>
        <Form.Control type="text" placeholder="" /></Form.Group>
    
      <Button variant="primary" type="submit">Agregar Tarea</Button>
    </Form>
  );
}

export default Formulario;