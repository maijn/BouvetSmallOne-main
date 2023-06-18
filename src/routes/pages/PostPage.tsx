import React from "react"
import { useParams } from "react-router-dom"
import { Post } from "tasks/Post"

const PostPageComponent = () => {
	const { postId } = useParams<"postId">()
	const postIdNum = parseInt(postId ?? "")

	if (isNaN(postIdNum)) {
		return <p>Post id not a number {postId}</p>
	}

	return <Post postId={postIdNum} />
}

export const PostPage = React.memo(PostPageComponent)
