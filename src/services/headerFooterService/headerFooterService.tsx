import React, { createContext, useEffect, useState } from "react"

import { createContextUser } from "utils/createContextUser"

interface HeaderFooterServiceProps {
	headerTitle: string
	setHeaderTitle: (newTitle: string) => unknown

	footer: React.ReactNode
	setFooter: (newFooter: React.ReactNode) => unknown
}

const HeaderFooterService = createContext<HeaderFooterServiceProps | undefined>(
	undefined
)
HeaderFooterService.displayName = "HeaderFooterService"
export const useHeaderFooterService = createContextUser(HeaderFooterService)
export const useHeaderTitle = (newTitle: string) => {
	const { setHeaderTitle } = useHeaderFooterService()
	useEffect(() => {
		setHeaderTitle(newTitle)
	}, [newTitle, setHeaderTitle])
}
export const useFooter = (footer: React.ReactNode) => {
	const { setFooter } = useHeaderFooterService()
	useEffect(() => {
		setFooter(footer)
	}, [footer, setFooter])
}

export interface ProvideHeaderFooterServiceProps {
	children: React.ReactNode
}

const ProvideHeaderFooterServiceComponent = ({
	children
}: ProvideHeaderFooterServiceProps) => {
	const [headerTitle, setHeaderTitle] = useState("")
	const [footer, setFooter] = useState<React.ReactNode>(null)

	return (
		<HeaderFooterService.Provider
			value={{ headerTitle, setHeaderTitle, footer, setFooter }}
		>
			{children}
		</HeaderFooterService.Provider>
	)
}

export const ProvideHeaderFooterService = React.memo(
	ProvideHeaderFooterServiceComponent
)
