
import './App.css';
import {Provider} from 'react-redux'
import {Store} from './Redux/Store'
import Main from './Component/Main.js';


function App() {
  return (
    <div className="App">
  <Provider store = {Store}>
   <Main/>
   </Provider>
    </div>
  );
}

export default App;
