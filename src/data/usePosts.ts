import { useQuery } from "@tanstack/react-query"
import { Post, PostResponse } from "./postsModel"
import { User } from "./userModel"

const fetchPosts = async (userId: User["id"]) => {
	const response = await fetch(`https://dummyjson.com/posts/user/${userId}`)
	const body: PostResponse = await response.json()
	return body.posts
}
const fetchPost = async (postId: Post["id"]) => {
	const response = await fetch(`https://dummyjson.com/posts/${postId}`)
	const body: Post = await response.json()
	return body
}

const postKeys = {
	all: ["posts"] as const,
	byUserId: (userId: Post["userId"]) =>
		[...postKeys.all, "byUser", userId] as const,
	byId: (postId: Post["id"]) => [...postKeys.all, "byId", postId] as const
} as const

export const usePosts = (byUserId: Post["userId"]) => {
	return useQuery(postKeys.byUserId(byUserId), () => fetchPosts(byUserId))
}

export const usePostById = (postId: Post["id"]) => {
	return useQuery(postKeys.byId(postId), () => fetchPost(postId))
}
