import React from "react"

const HomePageComponent = () => {
	return (
	<>
		<h1>Hello World!</h1>
		<h2>Debugging tips and tricks</h2>
	</>
	)
}

export const HomePage = React.memo(HomePageComponent)
