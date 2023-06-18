import React from "react"
import { staticData } from "data/staticData"

const DemoLoopUsersComponent = () => {
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
