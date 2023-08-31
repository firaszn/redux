import React from 'react';

import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';

const App = () => {

  return (
    <div>
      <h1 style={{display:'flex',justifyContent:'center'}}> ToDo Application</h1>
      <AddTask/>
      <ListTask />
     
    </div>
  );
};

export default App;
