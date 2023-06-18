import create from "zustand"
import { devtools } from "zustand/middleware"

interface SettingsStore {
	navWidthPx: number
}

export const useSettingsStore = create(
	devtools<SettingsStore>(
		() => ({
			navWidthPx: 100
		}),
		{ name: "SettingsStore" }
	)
)
