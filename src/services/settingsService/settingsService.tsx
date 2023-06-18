import React, { createContext, useState } from "react"

import { createContextUser } from "utils/createContextUser"

interface SettingsServiceProps {
	navWidthPx: number
	setNavWidth: (newWidth: number) => unknown
}

const SettingsService = createContext<SettingsServiceProps | undefined>(
	undefined
)
SettingsService.displayName = "SettingsService"
export const useSettingsService = createContextUser(SettingsService)

export interface ProvideSettingsServiceProps {
	children: React.ReactNode
}

const ProvideSettingsServiceComponent = ({
	children
}: ProvideSettingsServiceProps) => {
	const [navWidthPx, setNavWidth] = useState(100)

	return (
		<SettingsService.Provider value={{ navWidthPx, setNavWidth }}>
			{children}
		</SettingsService.Provider>
	)
}

export const ProvideSettingsService = React.memo(
	ProvideSettingsServiceComponent
)
