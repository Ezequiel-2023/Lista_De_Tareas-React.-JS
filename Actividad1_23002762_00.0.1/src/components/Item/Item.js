// archivo js para el componete item
import { useDispatch } from 'react-redux';
import { removeGoal } from '../reducers/goalsSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';

function Item(props) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeGoal(props.index)); 
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Control De Tareas</Card.Title>
        <Card.Text>{props.name}</Card.Text>
        <Card.Title>Descripcion</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Title>Fecha</Card.Title>
        <Card.Text>{props.dueDate}</Card.Text>
        <Button variant="success">Editar </Button>
        <Button variant="danger" onClick={handleDelete}>Eliminar </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
