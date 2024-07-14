import React from 'react';
import { Card, Button, Table } from 'react-bootstrap';
import '../css/Table.css';

const Display = ({ data, onDelete, onUpdateStatus, setCurrentID }) => {

  const handleComplete = (id) => {
    onUpdateStatus(id, 'Completed');
  };

  return (
    <>
      <Card style={{ width: '80%', height: "80%", border: "1px solid black", margin: "auto" }}>
        <center><label><h2>All Todos Are Here!</h2></label></center>
        <center><Card style={{ width: '80%' }}><h4>Number of Todos : {data.length} </h4></Card></center>
        <center>
          <Table striped bordered hover style={{ width: '80%' }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.disc}</td>
                    <td>{item.status}</td>
                    <td>
                      <Button variant="primary" onClick={() => setCurrentID(item.id)}>Update</Button>&nbsp;
                      <Button variant="danger" onClick={() => onDelete(item.id)}>Delete</Button>&nbsp;
                      <Button variant="success" onClick={() => handleComplete(item.id)}>Complete</Button>&nbsp;
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </center>
      </Card>
    </>
  );
}

export default Display;
