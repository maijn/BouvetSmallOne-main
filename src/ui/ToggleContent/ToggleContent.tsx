import { CheckboxInput } from "ui/CheckboxInput"
import React, { useState } from "react"

export interface ToggleContentProps {
	children: React.ReactNode
}

const ToggleContentComponent = ({ children }: ToggleContentProps) => {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<>
			<div>
				<CheckboxInput
					label="Toggle content"
					value={isVisible}
					onChange={setIsVisible}
				/>
			</div>
			{isVisible && children}
		</>
	)
}

export const ToggleContent = React.memo(ToggleContentComponent)
