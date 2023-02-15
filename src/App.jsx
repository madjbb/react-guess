import { useState } from 'react';
import './App.css';
// import MyComponent from './components/MyComponent';
// import Surround from './components/Surround';
// import Slots from './components/Slots';
// import Intervene from './components/Intervene';
import List from './components/List';
import EventButtons from './components/EventButtons';

function App() {
  // const itms = [{name: "James", email: "james@james.com"}, {name: "Miguel", email: "james@james.com"}, {name: "Bobby", email: "james@james.com"}]
  return (
    <div className="App">
      {/* <List items={itms} /> */}
      <EventButtons />
    </div>
  );
  
}

export default App;
