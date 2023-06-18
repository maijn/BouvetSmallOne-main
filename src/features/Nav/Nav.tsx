import styled from "@emotion/styled"
import React from "react"
import { Link } from "react-router-dom"
// import { useSettingsService } from "services/settingsService"
import { useSettingsStore } from "store/settingsStore"

const StyledNav = styled.nav`
	a {
		display: block;
		margin: 6px 0;
		&:first-of-type {
			margin-top: 0;
		}
	}
`

const NavComponent = () => {
	const navWidthPx = useSettingsStore((store) => store.navWidthPx)
	// const { navWidthPx } = useSettingsService()

	return (
		<StyledNav style={{ width: navWidthPx }}>
			<Link to="/">Home</Link>
			<hr />
			<Link to="/task/incrementor">Incrementor</Link>
			<Link to="/task/page-title">Page Title</Link>
			<Link to="/task/simple-todo">Simple Todo</Link>
			<hr />
			<Link to="/users">Users</Link>
			<Link to="/settings">Settings</Link>
		</StyledNav>
	)
}

export const Nav = React.memo(NavComponent)
