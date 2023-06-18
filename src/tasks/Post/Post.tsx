import styled from "@emotion/styled"
import { Post as PostModel } from "data/postsModel"
import { useCommentsByPost } from "data/useComments"
import { usePostById } from "data/usePosts"
import React, { useMemo, useState } from "react"
import { useFooter, useHeaderTitle } from "services/headerFooterService"
import { Comment } from "./Comment"

const HighlightableButon = styled.button<{ highlighted: boolean }>`
	background-color: ${({ highlighted }) =>
		highlighted ? "hotpink" : "initial"};
`

export interface PostProps {
	postId: PostModel["id"]
}

const PostComponent = ({ postId }: PostProps) => {
	const { data: post } = usePostById(postId)
	const { data: comments = [] } = useCommentsByPost(postId)

	const [sortCommentsBy, setSortCommentsBy] = useState<"id" | "username">("id")
	const sortedComments = useMemo(() => {
		const commentsToSort = comments.slice(0)
		switch (sortCommentsBy) {
			case "id":
				commentsToSort.sort((a, b) => a.id - b.id)
				break
			case "username":
				commentsToSort.sort((a, b) =>
					a.user.username.localeCompare(b.user.username)
				)
				break
		}
		return commentsToSort
	}, [comments, sortCommentsBy])

	useHeaderTitle(useMemo(() => post?.title ?? "", [post?.title]))
	useFooter(
		useMemo(() => <p>Comments: {comments.length}</p>, [comments.length])
	)

	if (!post) {
		return <p>No such post found</p>
	}

	const changeSortCommentsBy = (sortBy: "id" | "username") => () => {
		setSortCommentsBy(sortBy)
	}

	return (
		<>
			<h2>{post.title}</h2>
			<ul>
				{post.tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
			<article>{post.body}</article>
			<hr />
			<h3>Comments</h3>
			<HighlightableButon
				highlighted={sortCommentsBy === "id"}
				onClick={changeSortCommentsBy("id")}
			>
				Sort by id
			</HighlightableButon>
			<HighlightableButon
				highlighted={sortCommentsBy === "username"}
				onClick={changeSortCommentsBy("username")}
			>
				Sort by username
			</HighlightableButon>
			<ul>
				{sortedComments.map((comment) => (
					<li key={comment.id}>
						<Comment comment={comment} />
					</li>
				))}
			</ul>
		</>
	)
}

export const Post = React.memo(PostComponent)
