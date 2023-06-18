import React from "react"

export interface DemoRepeatElementProps {
	count: number
	children: React.ReactElement
}

const DemoRepeatElementComponent = ({
	count,
	children
}: DemoRepeatElementProps) => {
	const items: React.ReactElement[] = []
	for (let i = 0; i < count; i++) {
		items.push(React.cloneElement(children, { "data-index": i, key: i }))
	}

	return <>{items}</>
}

export const DemoRepeatElement = React.memo(DemoRepeatElementComponent)
