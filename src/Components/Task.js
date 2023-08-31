import React, { useState } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask, editTask } from '../JS/Action';

const Task = ({ task }) => { 
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleEdit = () => {
    dispatch(editTask(task.id, newDescription)); 
    handleClose();
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '29px' }}>
      <span
        style={{
          textDecoration: task.isDone ? 'line-through' : 'none', 
          
        }}
      >
        {task.description}
      </span>
      <Button onClick={() => dispatch(doneTask(task.id))}>
        {task.isDone ? 'undone' : 'done'}
      </Button>
      <Button variant="info" onClick={handleShow}>Edit</Button>
      <Button variant="danger" onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Task;
