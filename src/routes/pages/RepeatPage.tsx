import { DemoRepeatElement } from "demos/DemoRepeatElement"
import { useParams } from "react-router"

export const RepeatPage = () => {
	const { count } = useParams<"count">()

	if (!count) {
		return <p>No count parameter given</p>
	}

	const countAsNum = parseInt(count)
	if (isNaN(countAsNum)) {
		return <p>Expected numeric count parameter</p>
	}

	return (
		<DemoRepeatElement count={countAsNum}>
			<p>Repeat me</p>
		</DemoRepeatElement>
	)
}
