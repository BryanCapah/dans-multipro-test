
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Screen from './screens'
import './App.css';
import Login from './screens/login';

function App() {
  const height = document.documentElement.clientHeight
  return (
    <div className="App" style={{ height, minHeight: height }} >
      <Router>
        <Routes>
          <Route
            path='/login'
            name='Login'
            element={<Login />}
          />
          <Route
            path='/'
            name='Login'
            element={<Navigate replace to='/login' />}
          />
        </Routes>
        <Screen />
      </Router>
    </div>
  );
}

export default App;