import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Update = ({ data, id, onUpdateTodo }) => {
  const [title, setTitle] = useState('');
  const [disc, setDisc] = useState('');

  useEffect(() => {
    const todo = data.find(item => item.id === id);
    if (todo) {
      setTitle(todo.title);
      setDisc(todo.disc);
    }
  }, [id, data]);

  const handleUpdate = () => {
    if (title && disc) {
      onUpdateTodo(id, title, disc);
    } else {
      alert('Both title and description are required');
    }
  };

  return (
    <Card style={{ width: '50%', margin: 'auto', border: '1px solid black' }}>
      <Card.Body>
        <Card.Title>Update Todo</Card.Title>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Todo Title</Form.Label>
            <Form.Control 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Enter title" 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Todo Description</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              value={disc} 
              onChange={(e) => setDisc(e.target.value)} 
              placeholder="Enter description" 
            />
          </Form.Group>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Update;
