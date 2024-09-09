import React, {useEffect} from 'react';
import './App.css';
import './asset/css/todos.scss';
import store from './state/store';
import Insert from './component/Insert';
import List from './component/List';
import Sort from './component/Sort';

function App() {

  // 1.get, delete (url, option)
  // 2.post, put (url, body, option)

  return (
    <div className='todolist'>
      <h2>todos</h2>
      <div className='wrap'>
        <Insert/>
        <List/>
        <Sort/>
      </div>
    </div>
  );
}

export default App;
