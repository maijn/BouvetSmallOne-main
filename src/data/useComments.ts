import { useQuery } from "@tanstack/react-query"
import { CommentsResponse } from "./commentsModel"
import { Post } from "./postsModel"

const fetchCommentsByPost = async (postId: Post["id"]) => {
	const response = await fetch(`https://dummyjson.com/comments/post/${postId}`)
	const body: CommentsResponse = await response.json()
	return body.comments
}

const commentKeys = {
	all: ["comments"] as const,
	byPost: (postId: Post["id"]) =>
		[...commentKeys.all, "byPostId", postId] as const
} as const

export const useCommentsByPost = (postId: Post["id"]) => {
	return useQuery(commentKeys.byPost(postId), () => fetchCommentsByPost(postId))
}
