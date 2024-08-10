import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import OneBox from './components/OneBox';
import CustomEditor from './components/CustomEditor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/onebox"
            element={<OneBox />}
          />
          <Route
            path="/editor"
            element={<CustomEditor />}
          />
          <Route
            path="*"
            element={<Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
