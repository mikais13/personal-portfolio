import React from 'react';
import Root from './Root';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Experience from './Experience';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';

const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" component={() => <Root />}>
    <Route path="/" component={() => <Home />}/>
    <Route path="/about" component={() => <About />}/>
    <Route path="/experience" component={() => <Experience />}/>
    <Route path="/contact" component={() => <Contact />}/>
  </Route>
));

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
