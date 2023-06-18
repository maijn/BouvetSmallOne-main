import React from "react"
import { staticData } from "data/staticData"

const DemoLoopUsersComponent = () => {
	// const userList = staticData.map((user) => (
	// 	<li>
	// 		{user.name} - {user.id}
	// 	</li>
	// ))

	// const userList: JSX.Element[] = []
	// for (const user of staticData) {
	// 	userList.push(
	// 		<li>
	// 			{user.name} - {user.id}
	// 		</li>
	// 	)
	// }

	return (
		<table>
			<tbody>
				{staticData.map((user) => (
					<tr key={user.id}>
						<td>{user.firstName}</td>
						<td>{user.id}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export const DemoLoopUsers = React.memo(DemoLoopUsersComponent)
