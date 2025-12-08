import { useLayoutEffect } from "react"
import { Outlet } from "react-router-dom"
import Navigation from "../Navigation"
import "./index.scss"

export default function Root() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="root">
      <Navigation />
      <div className="main">
        <Outlet />
      </div>
    </div>
  )
}
