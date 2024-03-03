import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { AuthProvider } from './context/AuthContext';
import Login from './components/account/Login';
import Register from './components/account/Register';
import Profile from './components/account/Profile';
import WithPrivateRoute from './utils/WithPrivateRoute';

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
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/profile' element={
            <WithPrivateRoute>
              <Profile />
            </WithPrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
