import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
// import '../css/Todo.css';
import Display from './Display';
import Update from './Update';

const Todo = () => {
  const [title, setTitle] = useState("");
  const [disc, setDisc] = useState("");
  const [data, setData] = useState([]);
  const [id, setID] = useState(1);
  const [currentID, setCurrentID] = useState(null);

  const add = () => {
    if (title && disc) {
      setData([...data, { id: id, title: title, disc: disc, status: "pending" }]);
      setTitle("");
      setDisc("");
      setID(id + 1);
      alert("Added Todo Work Successfully...");
    } else if (title === "") {
      alert("Write Title");
    } else if (disc === "") {
      alert("Write Description");
    } else {
      alert("Data not found...");
    }
  };

  const updateTodoStatus = (id, status) => {
    const updatedData = data.map(todo =>
      todo.id === id ? { ...todo, status } : todo
    );
    setData(updatedData);
  };

  const deleteTodo = (id) => {
    const updatedData = data.filter(todo => todo.id !== id);
    setData(updatedData);
  };

  const updateTodo = (id, title, disc) => {
    const updatedData = data.map(todo =>
      todo.id === id ? { ...todo, title, disc } : todo
    );
    setData(updatedData);
    setCurrentID(null);
  };

  const [showList, setShowList] = useState(false);
  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <>
      <br />
      <Card style={{ width: '80%', height: "80%", border: "1px solid black", margin: "auto" }}>
        <center><label><h2>Add Todo Here!</h2></label></center><br />
        <center><Card style={{ width: '80%' }}><h4>Number of Todos : {data.length} </h4></Card></center>
        <Form>
          <Form.Group className="mb-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Form.Label>Todo Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Here" value={title} style={{ width: "80%", height: "80%", margin: "auto" }} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Form.Label>Todo Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder='Enter Description' value={disc} style={{ width: "80%", height: "80%", margin: "auto" }} onChange={(e) => setDisc(e.target.value)} />
          </Form.Group>
        </Form>
        <center>
          <Container>
            <Row>
              <Col><Button variant="primary" style={{ margin: "auto" }} onClick={add}>Add</Button></Col>
              <Col><Button variant="info" style={{ margin: "auto" }} onClick={toggleList}>{showList ? "Hide" : "Display"}</Button></Col>
            </Row>
          </Container>
        </center>
        <br />
      </Card>
      <br /><br />
      {showList && <Display data={data} onDelete={deleteTodo} onUpdateStatus={updateTodoStatus} setCurrentID={setCurrentID} />}
      {currentID && <Update data={data} id={currentID} onUpdateTodo={updateTodo} />}
    </>
  );
}

export default Todo;
