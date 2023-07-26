import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  function Clickme(){
    alert("I got clicked ")
}




  return (
    <div>
      <h1>
      <Button onClick={Clickme} text="submit" />

      </h1>


    </div>
   
   
  );
}

export default App;
