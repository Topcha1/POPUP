import './Components/style/style.css'
import Popup from './Components/Popup';
import { useState, UseState } from "react";



function App() {

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <main>
        <h1>React</h1>
        <br></br>
        <button onClick = {() => setButtonPopup(true)}>Click here to see POPUP!!</button>
        <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
          <h3>HomeWork 4</h3>
          <p>TASK 1</p>
        </Popup>
      </main>
    </div>
  );
}

export default App;
