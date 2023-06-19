import { useUsers } from "data/useUsers"
import React from "react"
import { Link } from "react-router-dom"
import { TextInput } from "ui/TextInput"
import { useDebounce } from "utils/useDebounce"

export interface UserListProps {
	query: string
	onQueryChange: (newQuery: string) => unknown
}

const UserListComponent = ({ query, onQueryChange }: UserListProps) => {
	const { debouncedValue: debouncedSearchText } = useDebounce(query, 250)
	const { data = [] } = useUsers(debouncedSearchText)

	return (
		<>
			<TextInput label="Search" value={query} onChange={onQueryChange} />
			<Link to="new">New user</Link>
			<ul>
				{data.map((user) => (
					<li key={user.id}>
						{user.firstName} {user.lastName} {user.email} -{" "}
						<Link to={`/task/user-posts/${user.id}`}>Posts</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export const UserList = React.memo(UserListComponent)
