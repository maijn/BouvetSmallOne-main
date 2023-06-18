import React from "react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5
		}
	}
})

export interface ProvideReactQueryServiceProps {
	children: React.ReactNode
}

const ProvideReactQueryServiceComponent = ({
	children
}: ProvideReactQueryServiceProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}

export const ProvideReactQueryService = React.memo(
	ProvideReactQueryServiceComponent
)
