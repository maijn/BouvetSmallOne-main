import { DummyJSONReponseBase } from "./DummyJSONResponse"

export type CommentsResponse = DummyJSONReponseBase<Comment, "comments">

export interface Comment {
	id: number
	body: string
	postId: number
	user: User
}

interface User {
	id: number
	username: string
}
