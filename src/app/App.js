import React, { useEffect } from 'react';
import Root from '../components/Root';
import About from '../components/About';
import Home from '../components/Home';
import ExperiencePage from '../components/Experience';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.scss';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/experience" element={< ExperiencePage />} />
  </Route>
));

function App() {
  useEffect(() => {
    document.title = `Mikai Somerville`;
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <SpeedInsights />
    </>
  );
}

export default App;