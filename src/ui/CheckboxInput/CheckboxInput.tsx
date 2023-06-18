import React, { useMemo } from "react"
import { createIdGenerator } from "../../utils/createIdGenerator"

const genId = createIdGenerator("checkboxInput")

export interface CheckboxInputProps {
	label: string
	value: boolean
	onChange: (newValue: boolean) => unknown
}

const CheckboxInputComponent = ({
	label,
	value,
	onChange
}: CheckboxInputProps) => {
	const id = useMemo(genId, [])

	const onRangeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		onChange(evt.target.checked)
	}

	return (
		<div>
			<input id={id} type="checkbox" checked={value} onChange={onRangeChange} />
			<label htmlFor={id}>{label}</label>
		</div>
	)
}

export const CheckboxInput = React.memo(CheckboxInputComponent)
