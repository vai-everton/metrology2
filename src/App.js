import './App.css';



import Card from './components/Card/Card.jsx'
import TopBar from './Topbar'



import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'

function App() {

  const informacao = "Olá"


  return (
    <div className="App">
      <TopBar />

      
      <h1>Hello</h1>
      <Card informacao = {informacao}/>
    </div>
  );
}

export default App;
