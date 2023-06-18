import React from "react"
import { AppLayout } from "layouts"
import { Route, Routes as ReactRouterRoutes } from "react-router"
import { HomePage } from "./pages/HomePage"

import {
	IncrementorPage,
	PageTitlePage,
	RepeatPage,
	SimpleTodoPage
} from "./dynamicRoutes"
import { SettingsPage } from "./pages/SettingsPage"
import { UserListPage } from "./pages/UserListPage"
import { PostsByUserPage } from "./pages/PostsByUserPage"
import { PostPage } from "./pages/PostPage"
import { CreateUserPage } from "./pages/CreateUserPage"

export const Routes = () => (
	<ReactRouterRoutes>
		<Route path="/" element={<AppLayout />}>
			<Route index element={<HomePage />} />
			<Route path="repeat">
				<Route index element={<RepeatPage />} />
				<Route path=":count" element={<RepeatPage />} />
			</Route>
			<Route path="task">
				<Route path="incrementor" element={<IncrementorPage />} />
				<Route path="page-title" element={<PageTitlePage />} />
				<Route path="simple-todo" element={<SimpleTodoPage />} />
				<Route path="user-posts/:userId" element={<PostsByUserPage />} />
			</Route>
			<Route path="users">
				<Route index element={<UserListPage />} />
				<Route path="new" element={<CreateUserPage />} />
			</Route>
			<Route path="posts/:postId" element={<PostPage />} />
			<Route path="settings" element={<SettingsPage />} />
			<Route path="*" element={<p>404</p>} />
		</Route>
	</ReactRouterRoutes>
)
