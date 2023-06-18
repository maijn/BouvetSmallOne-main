import React, { useState } from "react"

export interface DemoBrowserEventExampleProps {
	name: string
}

const DemoBrowserEventExampleComponent = ({
	name
}: DemoBrowserEventExampleProps) => {
	const [isDisabled, setIsDisabled] = useState(false)

	const greet = () => {
		alert(`Hi there ${name}`)
		setIsDisabled(true)
	}

	return (
		<button onClick={greet} disabled={isDisabled}>
			Greet!
		</button>
	)
}

export const DemoBrowserEventExample = React.memo(
	DemoBrowserEventExampleComponent
)
