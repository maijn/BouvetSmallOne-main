import { UserList } from "features/UserList"
import { useSearchParams } from "react-router-dom"

export const UserListPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const onQueryChange = (newQuery: string) => {
		setSearchParams({ q: newQuery })
	}
	return (
		<UserList
			query={searchParams.get("q") ?? ""}
			onQueryChange={onQueryChange}
		/>
	)
}
