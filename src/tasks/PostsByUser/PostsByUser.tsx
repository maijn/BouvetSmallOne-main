import { Post } from "data/postsModel"
import { usePosts } from "data/usePosts"
import React from "react"
import { SinglePost } from "./SinglePost"

export interface PostsByUserProps {
	userId: Post["userId"]
}

const PostsByUserComponent = ({ userId }: PostsByUserProps) => {
	const { data: posts = [] } = usePosts(userId)

	return (
		<ul>
			{posts.map((post) => (
				<li key={post.id}>
					<SinglePost post={post} />
				</li>
			))}
		</ul>
	)
}

export const PostsByUser = React.memo(PostsByUserComponent)
