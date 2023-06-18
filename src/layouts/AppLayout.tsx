import React from "react"
import styled from "@emotion/styled"
import { Nav } from "features/Nav"
import { Outlet } from "react-router"
import { useHeaderFooterService } from "services/headerFooterService"

const Frame = styled.div`
	display: flex;
	min-height: 100%;
	width: 100%;
`
const NavColumn = styled.div`
	padding: 6px;
	margin-right: 18px;
`
const MainColumn = styled.div`
	flex: 1 0;
	display: flex;
	flex-direction: column;
`

const AppLayoutComponent = () => {
	const { headerTitle, footer } = useHeaderFooterService()

	return (
		<Frame>
			<NavColumn>
				<Nav />
			</NavColumn>
			<MainColumn>
				<header>
					<h1>{headerTitle}</h1>
				</header>
				<main>
					<React.Suspense fallback={<p>Loading...</p>}>
						<Outlet />
					</React.Suspense>
				</main>
				<footer>{footer}</footer>
			</MainColumn>
		</Frame>
	)
}

export const AppLayout = React.memo(AppLayoutComponent)
