import './App.css';
import { BrowserRouter } from "react-router-dom";
import Pages from './pages/Pages';
import Header from './components/Header';

function App() {
   return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Pages/>
      </BrowserRouter>
    </div>
  )

}



export default App;
