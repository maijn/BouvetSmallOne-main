import React, { useEffect, useState } from "react"

const myAwesomeSideEffect = () => {
	console.log("form DemoUseEffectComponent")
	return () => {
		console.log("bye from DemoUseEffectComponent")
	}
}

const DemoUseEffectComponent = () => {
	const [userId, setUserId] = useState(0)

	useEffect(myAwesomeSideEffect, [])

	const onCount = () => {
		setUserId(userId + 1)
	}

	return <button onClick={onCount}>{userId}</button>
}

export const DemoUseEffect = React.memo(DemoUseEffectComponent)
