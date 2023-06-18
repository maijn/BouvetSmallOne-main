import { Post } from "data/postsModel"
import React from "react"
import { Link } from "react-router-dom"

export interface SinglePostProps {
	post: Post
}

const SinglePostComponent = ({ post }: SinglePostProps) => {
	return <Link to={`/posts/${post.id}`}>{post.title}</Link>
}

export const SinglePost = React.memo(SinglePostComponent)
