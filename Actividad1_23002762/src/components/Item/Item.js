// archivo js para el componete item
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Actividad</Card.Title>
        <Card.Text>
          Control De Tareas
        </Card.Text>
        <Card.Title>Descripcion</Card.Title>
        <Card.Text>
          Se necesita crear una aplicación web para llevar el control de Tareas
        </Card.Text>
        <Card.Title>Fecha</Card.Title>
        <Card.Text>
          22/04/2024
        </Card.Text>
        <Button variant="success">Enviar Proyecto</Button>
        <Button variant="danger">Editar Tarea</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;