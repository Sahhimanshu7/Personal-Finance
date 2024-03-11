import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import Login from './components/account/Login';
import Register from './components/account/Register';
import Profile from './components/account/Profile';
import WithPrivateRoute from './utils/WithPrivateRoute';
import HomeRenderer from './components/layouts/HomeRenderer';
import LoadingScreen from './components/layouts/LoadingScreen';
import Expenses from './components/home/Expenses';

import './App.css';
import { Experimental_CssVarsProvider } from '@mui/material';
import Incomes from './components/home/Incomes';

function App() {
  return (
    <AuthProvider>
      <Router>
        <LoadingScreen />   {/* Renders a loading screen when enabled. */}
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
          <Route exact path='/add-expense' element={
            <WithPrivateRoute>
              <Expenses />
            </WithPrivateRoute>
          } />
          <Route exact path='/add-income' element={
            <WithPrivateRoute>
              <Incomes />
            </WithPrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
