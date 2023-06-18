import { DemoCreateUser } from "demos/DemoCreateUser"
import React from "react"

const CreateUserPageComponent = () => {
	return <DemoCreateUser />
}

export const CreateUserPage = React.memo(CreateUserPageComponent)
