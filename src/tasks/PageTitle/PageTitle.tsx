import React, { useState } from "react"
import { TextInput } from "ui/TextInput"
import { usePageTitle } from "usePageTitle"

const PageTitleComponent = () => {
	const [title, setTitle] = useState("")
	usePageTitle(title)

	return <TextInput label="New title" value={title} onChange={setTitle} />
}

export const PageTitle = React.memo(PageTitleComponent)
