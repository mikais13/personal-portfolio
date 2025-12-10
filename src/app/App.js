import { useEffect } from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import About from "../components/About"
import ExperiencePage from "../components/Experience"
import Home from "../components/Home"
import Root from "../components/Root"
import "./App.scss"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} path="/">
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<ExperiencePage />} path="/experience" />
    </Route>,
  ),
)

function App() {
  useEffect(() => {
    document.title = "Mikai Somerville"
  }, [])

  return <RouterProvider router={router} />
}

export default App
