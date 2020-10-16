import React from 'react';
import { useSelector } from 'react-redux';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Chat } from './Chat';
import { Sidebar } from './Sidebar/Sidebar';
import { selectUser } from './features/userSlice'
import { Login } from './Login';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
        {user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : 
          <Login />
        }
          
    </div>
  );
}

export default App;
