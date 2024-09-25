export function clickOutside(node: HTMLElement | null) {
	window.addEventListener('click', handleClick)

	function handleClick(e: Event) {
		if (!node?.contains(e.target as Node)) {
			node?.dispatchEvent(new CustomEvent('outsideclick'))
		}
	}

	return {
		destroy() {
			window.removeEventListener('click', handleClick)
		}
	}
}
