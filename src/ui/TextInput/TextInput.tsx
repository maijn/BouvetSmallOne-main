import React, { useMemo } from "react"
// import styles from "./TextInput.module.css"
import styled from "@emotion/styled"
import { createIdGenerator } from "utils/createIdGenerator"

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

const idGenerator = createIdGenerator("textInput")

export interface TextInputProps {
	label: string
	value: string
	/**
	 * Provide a function that will be called whenever the Enter key is pressed while the input has focus.
	 */
	onEnterPress?: () => unknown
	onChange: (newValue: string) => unknown
}

const TextInputComponent = ({
	label,
	value,
	onEnterPress,
	onChange
}: TextInputProps) => {
	// const [value, setValue] = useState("")
	const id = useMemo(idGenerator, [])

	const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		onChange(evt.target.value)
	}

	const onKeyUp = (evt: React.KeyboardEvent<HTMLInputElement>) => {
		if (evt.key === "Enter") {
			onEnterPress?.()
			evt.preventDefault()
		}
	}

	return (
		<Container>
			<Label htmlFor={id}>{label}</Label>
			<Input
				id={id}
				type="text"
				value={value}
				onChange={onInputChange}
				onKeyUp={onKeyUp}
			/>
		</Container>
	)
}

/**
 * Creates a text field for textual user input.
 */
export const TextInput = React.memo(TextInputComponent)
