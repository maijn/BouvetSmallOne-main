export type DummyJSONReponseBase<TRowType, TRowsName extends string> = {
	[key in TRowsName]: TRowType[]
} & {
	total: number
	skip: number
	limit: number
}
