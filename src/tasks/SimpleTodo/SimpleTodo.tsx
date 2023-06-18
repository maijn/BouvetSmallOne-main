import { AddTodoItem } from "./AddTodoItem"
import React, { useState } from "react"
import { nanoid } from "nanoid"

interface TodoItem {
	id: string
	text: string
}

const SimpleTodoComponent = () => {
	const [todos, setTodos] = useState<TodoItem[]>([])

	const onAddTodo = (newTodoText: string) => {
		const newTodos = todos.slice(0)
		newTodos.push({
			id: nanoid(),
			text: newTodoText
		})
		setTodos(newTodos)
	}

	const removeTodoById = (todoItemId: string) => () => {
		const newTodos = todos.filter((todo) => todo.id !== todoItemId)
		setTodos(newTodos)
	}
	// const removeTodoById = (todoItemId: string) => {
	// 	return () => {
	// 	const newTodos = todos.filter((todo) => todo.id !== todoItemId)
	// 	setTodos(newTodos)
	// }
	// }

	return (
		<>
			<AddTodoItem onAddTodo={onAddTodo} />
			<ul>
				{todos.map((todoItem) => (
					<li key={todoItem.id}>
						<button onClick={removeTodoById(todoItem.id)}>X</button>
						{todoItem.text}
					</li>
				))}
			</ul>
		</>
	)
}

export const SimpleTodo = React.memo(SimpleTodoComponent)
