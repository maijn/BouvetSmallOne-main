import React from "react"
// import { useSettingsService } from "services/settingsService"
import { useSettingsStore } from "store/settingsStore"
import { RangeInput } from "ui/RangeInput"

export interface SettingsProps {}

const SettingsComponent = (props: SettingsProps) => {
	const navWidthPx = useSettingsStore((store) => store.navWidthPx)
	const setNavWidth = (newWidth: number) => {
		useSettingsStore.setState({ navWidthPx: newWidth })
	}

	// const { navWidthPx, setNavWidth } = useSettingsService()

	return (
		<RangeInput
			label="Navigation width"
			value={navWidthPx}
			onChange={setNavWidth}
			min={10}
			max={400}
		/>
	)
}

export const Settings = React.memo(SettingsComponent)
