import { DemoRepeatElement } from "./DemoRepeatElement"
import { RangeInput } from "ui/RangeInput"
import React, { useState } from "react"

export interface DemoRepeatProps {}

const DemoRepeatComponent = (props: DemoRepeatProps) => {
	const [count, setCount] = useState(1)

	return (
		<>
			<RangeInput
				label="Count"
				value={count}
				onChange={setCount}
				min={1}
				max={1337}
			/>
			<DemoRepeatElement count={count}>
				<p title="hey">Hello there</p>
			</DemoRepeatElement>
		</>
	)
}

export const DemoRepeat = React.memo(DemoRepeatComponent)
