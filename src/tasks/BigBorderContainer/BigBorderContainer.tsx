import { BigBorder } from "./BigBorder"
import { CheckboxInput } from "ui/CheckboxInput"
import { RangeInput } from "ui/RangeInput"
import React, { useState } from "react"
import { ToggleContent } from "ui/ToggleContent"

const BigBorderContainerComponent = () => {
	const [borderWidth, setBorderWidth] = useState(3)
	const [borderRadius, setBorderRadius] = useState(5)
	const [padding, setPadding] = useState(10)
	const [isBorderSolid, setIsBorderSolid] = useState(false)

	return (
		<ToggleContent>
			<BigBorder
				borderWidth={borderWidth}
				borderRadius={borderRadius}
				borderStyle={isBorderSolid ? "solid" : "dashed"}
				padding={padding}
			>
				<RangeInput
					label="Width"
					value={borderWidth}
					onChange={setBorderWidth}
				/>
				<RangeInput
					label="Radius"
					value={borderRadius}
					onChange={setBorderRadius}
				/>
				<RangeInput label="Padding" value={padding} onChange={setPadding} />
				<CheckboxInput
					label="Solid"
					value={isBorderSolid}
					onChange={setIsBorderSolid}
				/>
			</BigBorder>
		</ToggleContent>
	)
}

export const BigBorderContainer = React.memo(BigBorderContainerComponent)
