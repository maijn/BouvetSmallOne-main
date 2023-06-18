/**
 * Naively computes fibonacci numbers by recursively calling itself.
 * @param num
 * @returns
 */
export const fibNaive = (num: number): number => {
	if (num === 0) return 0
	if (num === 1) return 1
	return fibNaive(num - 1) + fibNaive(num - 2)
}

/**
 * Define a cache for previous fibonacci computations so that the results can be reused.
 */
const fibCache: number[] = [0, 1]

/**
 * Compute fibonacci numbers using a cache for previous values.
 * @param num
 * @returns
 */
export const fibMemo = (num: number): number => {
	if (fibCache[num] !== undefined) return fibCache[num]
	return (fibCache[num] = fibMemo(num - 1) + fibMemo(num - 2))
}

/**
 * Declare new props for window so that typescript does not yell at us for the stuff below.
 */
declare global {
	interface Window {
		_fib: any
	}
}

// Declare some props on the global object so we can mess with it in the console.
window._fib = {
	fibNaive,
	fibMemo
}
