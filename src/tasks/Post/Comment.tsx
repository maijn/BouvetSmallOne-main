import { Comment as CommentModel } from "data/commentsModel"
import React from "react"

export interface CommentProps {
	comment: CommentModel
}

const CommentComponent = ({ comment }: CommentProps) => {
	return (
		<>
			<p>
				<strong>
					{comment.id} - {comment.user.username}
				</strong>
			</p>
			<p>{comment.body}</p>
		</>
	)
}

export const Comment = React.memo(CommentComponent)
