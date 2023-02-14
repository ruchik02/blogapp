import React from 'react'
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Form from './components/Form';
import Home from './components/Home';

const App = () => {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" exact element={<Home />} />
    <Route element={<Form />} path="/login" />
    <Route element={<Form />} path="/register" />
    </Routes>
    </Router>
    </>

  )
}

export default App;
