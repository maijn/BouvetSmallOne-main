import styled from "@emotion/styled"
import React, { useMemo } from "react"
import { createIdGenerator } from "../../utils/createIdGenerator"

const genId = createIdGenerator("rangeInput")

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 24px;
`
const Label = styled.label`
	display: block;
	margin-bottom: 6px;
`
const Input = styled.input`
	display: block;
	padding: 12px;
	border-radius: 6px;
	font-size: 1.2rem;
`

export interface RangeInputProps {
	label: string

	min?: number
	max?: number
	step?: number

	value: number
	onChange: (newValue: number) => unknown
}

const RangeInputComponent = ({
	label,
	min = 0,
	max = 120,
	step = 1,
	value,
	onChange
}: RangeInputProps) => {
	const id = useMemo(genId, [])

	const onRangeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		onChange(evt.target.valueAsNumber)
	}

	return (
		<Container>
			<Label htmlFor={id}>
				{label} {value}
			</Label>
			<Input
				id={id}
				type="range"
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={onRangeChange}
			/>
		</Container>
	)
}

export const RangeInput = React.memo(RangeInputComponent)
