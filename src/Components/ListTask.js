import React, { useState } from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const [status, setStatus] = useState('ALL');

  return (
    <div>
      <Dropdown style={{display:'flex',justifyContent:'center'}}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {status}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setStatus('ALL')}>ALL</Dropdown.Item>
          <Dropdown.Item onClick={() => setStatus('DONE')}>DONE</Dropdown.Item>
          <Dropdown.Item onClick={() => setStatus('UNDONE')}>UNDONE</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {status === 'DONE'
        ? tasks
            .filter((el) => el.isDone === true)
            .map((task) => <Task key={task.id} task={task} />)
        : status === 'UNDONE'
        ? tasks
            .filter((el) => el.isDone === false)
            .map((task) => <Task key={task.id} task={task} />)
        : tasks.map((task) => <Task key={task.id} task={task} />)}
    </div>
  );
};

export default ListTask;
