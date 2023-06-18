import React from "react"

export interface BigBorderProps {
	borderWidth: number
	borderRadius: number
	padding: number
	borderStyle: "solid" | "dashed"
	children: React.ReactNode
}

const BigBorderComponent = ({
	borderWidth,
	borderRadius,
	borderStyle,
	padding,
	children
}: BigBorderProps) => {
	const styles: React.HTMLAttributes<HTMLDivElement>["style"] = {
		border: `${borderWidth}px ${borderStyle} hotpink`,
		padding,
		borderRadius
	}

	return <div style={styles}>{children}</div>
}

export const BigBorder = React.memo(BigBorderComponent)
