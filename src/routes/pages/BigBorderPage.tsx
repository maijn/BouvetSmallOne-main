import { useMemo } from "react"
import { useFooter, useHeaderTitle } from "services/headerFooterService"
import { BigBorderContainer } from "tasks/BigBorderContainer"

export const BigBorderPage = () => {
	useHeaderTitle("Task - BigBorder")
	useFooter(useMemo(() => <p>Heisann</p>, []))
	return <BigBorderContainer />
}
