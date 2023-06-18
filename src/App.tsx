// import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "routes"
import { ProvideHeaderFooterService } from "services/headerFooterService"
import { ProvideReactQueryService } from "services/reactQueryService"
import { ProvideSettingsService } from "services/settingsService"

export const App = () => {
	return (
		<BrowserRouter>
			<ProvideSettingsService>
				<ProvideHeaderFooterService>
					<ProvideReactQueryService>
						<Routes />
					</ProvideReactQueryService>
				</ProvideHeaderFooterService>
			</ProvideSettingsService>
		</BrowserRouter>
	)
}

// export const App = () => React.createElement(
// 	"h1", { title: "test", children: "Hello world" })
