import { render, screen } from "@testing-library/react"
import HomePage from "pages"

describe("App", () => {
  it("renders without crashing", () => {
    render(<HomePage />)
    expect(
      screen.getByRole("main", { name: "Available For Consultation Now" })
    ).toBeInTheDocument()
  })
})
