import { useEffect, useState } from "react"

/**
 * A very simple debouncer that will report the latest value after a delay number of milliseconds
 * If the value changes multiple times within the delay interval the timer is reset and only the last
 * value is returned.
 * @param value
 * @param delay
 */
export const useDebounce = <TValue>(value: TValue, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value)
	const [isDebouncing, setIsDebouncing] = useState(false)

	useEffect(() => {
		setIsDebouncing(true)
		const timeoutId = setTimeout(() => {
			setIsDebouncing(false)
			setDebouncedValue(value)
		}, delay)
		return () => {
			clearTimeout(timeoutId)
		}
	}, [value, delay])

	return { debouncedValue, isDebouncing }
}
