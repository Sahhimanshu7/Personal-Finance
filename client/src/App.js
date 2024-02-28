import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { AuthProvider } from './context/AuthContext';
import Login from './components/account/Login';

function Dummmy(){
  return <p>Hello</p>;
}
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path='/login' element = {<Login />} />
          <Route exact path='/' element={<Dummmy />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
