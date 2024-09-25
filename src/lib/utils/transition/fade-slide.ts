import { slide } from 'svelte/transition'

export function fadeSlide(node: HTMLElement, options: { duration?: number; delay?: number }) {
	const slideTrans = slide(node, options)
	return {
		duration: options.duration,
		css: (t: number) => `${slideTrans.css?.(t, t)} opacity: ${t};`
	}
}
