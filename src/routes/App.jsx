import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Album from '../components/Album';
import Login from '../components/Login';
import Register from '../components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/album' element={<Album/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
