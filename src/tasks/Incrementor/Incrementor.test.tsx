import { IncrementorComponent } from "./Incrementor"
import { render, fireEvent } from "@testing-library/react"

describe("Incrementor", () => {
	it("should export correctly", () => {
		expect(IncrementorComponent).toBeDefined()
	})

	it("should show a button with an initial count of 0", () => {
		const { getAllByRole } = render(
			<IncrementorComponent limit={2}>Limit reached</IncrementorComponent>
		)
		const buttons = getAllByRole("button")
		expect(buttons.length).toBe(1)

		const [countButton] = buttons
		expect(countButton).toHaveTextContent("0")
	})

	it("should show text when limit is reached", () => {
		const { getAllByText, getAllByRole } = render(
			<IncrementorComponent limit={2}>Limit reached</IncrementorComponent>
		)

		const [countButton] = getAllByRole("button")
		fireEvent.click(countButton)
		fireEvent.click(countButton)
		expect(getAllByText("Limit reached").length).toBe(1)
	})
})
