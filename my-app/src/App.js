import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import Sub from './Sub';
import styled from 'styled-components';
import { Title, Wrapper } from './myCss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/login/Login';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login" exact={true} component={LoginPage} />
      <Footer />
    </div>
  );
}
export default App;
