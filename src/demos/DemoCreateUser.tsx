import { useCreateUserMutation } from "data/useUsers"
import React, { useState } from "react"
import { RangeInput } from "ui/RangeInput"
import { TextInput } from "ui/TextInput"

const DemoCreateUserComponent = () => {
	const { mutateAsync: createUser, isLoading } = useCreateUserMutation()
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [age, setAge] = useState(13)

	const onSubmit = async (evt: React.FormEvent) => {
		if (isLoading) return
		evt.preventDefault()
		await createUser({
			firstName,
			lastName,
			age
		})
		setFirstName("")
		setLastName("")
		setAge(13)
	}

	return (
		<form onSubmit={onSubmit}>
			<TextInput label="First name" value={firstName} onChange={setFirstName} />
			<TextInput label="Last name" value={lastName} onChange={setLastName} />
			<RangeInput
				label="Age"
				value={age}
				onChange={setAge}
				min={13}
				max={140}
			/>
			<input
				type="submit"
				value={isLoading ? "Submitting..." : "Submit"}
				disabled={isLoading}
			/>
		</form>
	)
}

export const DemoCreateUser = React.memo(DemoCreateUserComponent)
