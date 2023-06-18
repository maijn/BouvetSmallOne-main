// function DemoHelloWorld() {

// }

interface DemoHelloWorldProps {
	title: string
	children: React.ReactNode
}

export const DemoHelloWorld = ({ title, children }: DemoHelloWorldProps) => {
	return <h1 title={title}>{children}</h1>
}
