import React, { useState } from "react"

export interface IncrementorProps {
	limit: number
	children: string
}

export const IncrementorComponent = ({ limit, children }: IncrementorProps) => {
	const [counter, setCounter] = useState(0)
	const isLimitReached = counter >= limit

	const increment = () => {
		setCounter(counter + 1)
	}
	const resetCounter = () => {
		setCounter(0)
	}

	return (
		<>
			<button onClick={increment} disabled={isLimitReached}>
				{counter}
			</button>
			{isLimitReached && (
				<>
					<button onClick={resetCounter}>Reset</button>
					<p>{children}</p>
				</>
			)}
		</>
	)
}

export const Incrementor = React.memo(IncrementorComponent)
