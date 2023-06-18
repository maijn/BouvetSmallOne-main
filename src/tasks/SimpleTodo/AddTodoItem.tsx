import React, { useState } from "react"
import { TextInput } from "ui/TextInput"

export interface AddTodoItemProps {
	onAddTodo: (newTodoText: string) => unknown
}

const AddTodoItemComponent = ({ onAddTodo }: AddTodoItemProps) => {
	const [todoText, setTodoText] = useState("")
	// const hasTodoText = !!todoText.trim()
	const hasNoTodoText = !Boolean(todoText.trim())

	const addTodoText = () => {
		if (hasNoTodoText) return
		onAddTodo(todoText)
		setTodoText("")
	}

	return (
		<form onSubmit={(evt) => evt.preventDefault()}>
			<TextInput
				label="New todo"
				value={todoText}
				onChange={setTodoText}
				onEnterPress={addTodoText}
			/>
			<button disabled={hasNoTodoText} onClick={addTodoText}>
				Add
			</button>
		</form>
	)
}

export const AddTodoItem = React.memo(AddTodoItemComponent)
