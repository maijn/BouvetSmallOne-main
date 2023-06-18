import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { User, UserDTO, UserResponse } from "./userModel"

const fetchUsers = async (query?: string) => {
	const url = query
		? `https://dummyjson.com/users/search?q=${query}`
		: "https://dummyjson.com/users"
	const response = await fetch(url)
	const body: UserResponse = await response.json()
	return body.users
}

const createUser = async (newUser: UserDTO) => {
	const response = await fetch("https://dummyjson.com/users/add", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(newUser)
	})
	const body: User = await response.json()
	return body
}

const userKeys = {
	all: ["users"] as const,
	byQuery: (query?: string) =>
		!query ? userKeys.all : ([...userKeys.all, "byQuery", query] as const)
} as const

export const useUsers = (query?: string) => {
	return useQuery(userKeys.byQuery(query), () => fetchUsers(query), {
		refetchOnWindowFocus: false
	})
}

export const useCreateUserMutation = () => {
	const queryClient = useQueryClient()
	return useMutation(createUser, {
		onSuccess: (user) => {
			const users: User[] = queryClient.getQueryData(userKeys.all) ?? []
			queryClient.invalidateQueries(userKeys.all)
			queryClient.setQueryData(userKeys.all, () => users.concat([user]))
		}
	})
}
