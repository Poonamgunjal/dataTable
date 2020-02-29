import React from 'react';
import './App.css';
import TableComponent from './component/tableComponent.js';
import Home from './component/home';

function App() {
  

  return (
    <div className="App">
        <ul>
                 <li><a class="active" href="/Home">Home</a>
                
                 </li>
                 <li><a href='/JsonData'>Tab1</a>
                 </li>
                 <li><a href='/OtherData'>Tab2</a>
                 </li>
                </ul>
                <Home></Home>
     
    </div>
  );
}

export default App;
