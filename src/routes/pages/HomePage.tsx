import React from "react"

const HomePageComponent = () => {
	return <h1>Hello World!</h1>
}

export const HomePage = React.memo(HomePageComponent)
