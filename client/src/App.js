import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { AuthProvider } from './context/AuthContext';
import Login from './components/account/Login';
import Register from './components/account/Register';
import Profile from './components/account/Profile';
import WithPrivateRoute from './utils/WithPrivateRoute';
import HomeRenderer from './components/layouts/HomeRenderer';
import LoadingScreen from './components/layouts/LoadingScreen';

function App() {
  return (
    <AuthProvider>
      <Router>
        <LoadingScreen />
        <Routes>
          <Route exact path='/login' element = {<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/profile' element={
            <WithPrivateRoute>
              <Profile />
            </WithPrivateRoute>
          } />
          <Route exact path='/' element={
            <WithPrivateRoute>
              <HomeRenderer />
            </WithPrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
