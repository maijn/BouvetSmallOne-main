import React from "react"
import { Outlet } from "react-router"

export interface BasicLayoutProps {}

const BasicLayoutComponent = (props: BasicLayoutProps) => {
	return (
		<div data-layout="basicLayout">
			<Outlet />
		</div>
	)
}

export const BasicLayout = React.memo(BasicLayoutComponent)
