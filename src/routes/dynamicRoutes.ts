import React from "react"

export const BigBorderPage = React.lazy(async () => {
	await new Promise((resolve) => setTimeout(resolve, 5000))
	const { BigBorderPage } = await import("./pages/BigBorderPage")
	return {
		default: BigBorderPage
	}
})

export const IncrementorPage = React.lazy(async () => {
	const { IncrementorPage } = await import("./pages/IncrementorPage")
	return {
		default: IncrementorPage
	}
})

export const PageTitlePage = React.lazy(async () => {
	const { PageTitlePage } = await import("./pages/PageTitlePage")
	return {
		default: PageTitlePage
	}
})

export const SimpleTodoPage = React.lazy(async () => {
	const { SimpleTodoPage } = await import("./pages/SimpleTodoPage")
	return {
		default: SimpleTodoPage
	}
})

export const RepeatPage = React.lazy(async () => {
	const { RepeatPage } = await import("./pages/RepeatPage")
	return {
		default: RepeatPage
	}
})
