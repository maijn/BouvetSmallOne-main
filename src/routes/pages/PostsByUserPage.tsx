import React from "react"
import { useParams } from "react-router-dom"
import { PostsByUser } from "tasks/PostsByUser"

const PostsByUserPageComponent = () => {
	const { userId } = useParams<"userId">()
	const userIdNum = parseInt(userId + "")
	if (isNaN(userIdNum)) {
		throw new Error("UserId parameter must be specified")
	}

	return <PostsByUser userId={userIdNum} />
}

export const PostsByUserPage = React.memo(PostsByUserPageComponent)
