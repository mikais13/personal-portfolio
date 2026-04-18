import { render, screen } from "@testing-library/react"
import App from "./app/App"

test("renders without crashing", () => {
  render(<App />)
  expect(document.getElementById("root") || document.body).toBeTruthy()
})
