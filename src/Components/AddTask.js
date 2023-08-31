import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/Action';
import { Form, FormControl, Button } from 'react-bootstrap';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description) {
      dispatch(addTask({ id: Math.random(), description, isDone: false }));
    } else {
      alert('Cannot add an empty task');
    }
  };

  return (
    <div style={{display:'flex',justifyContent:'center'}}> 
      <Form >
        <FormControl 
          placeholder="Add new task..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button  onClick={handleAddTask}>Add Task</Button>
      </Form>
    </div>
  );
};

export default AddTask;
