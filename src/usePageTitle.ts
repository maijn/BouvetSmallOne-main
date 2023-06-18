import { useEffect } from "react"

export const usePageTitle = (title: string) => {
	useEffect(() => {
		const originalTitle = document.title
		return () => {
			document.title = originalTitle
		}
	}, [])

	useEffect(() => {
		document.title = `React Workshop: ${title}`
	}, [title])
}
