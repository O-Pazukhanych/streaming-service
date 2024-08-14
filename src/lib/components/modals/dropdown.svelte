<script lang="ts">
	import { clickOutside } from '$lib/utils/interaction/click-outside'
	import { fadeSlide } from '$lib/utils/transition/fade-slide'
	import { ChevronDown } from 'lucide-svelte'

	export let _class: string = ''
	export let _classRoot: string = ''
	export let mark: boolean = true
	export let align: 'left' | 'right' = 'left'
	export let minWidth: string = ''

	let isOpen: boolean = false
</script>

<div
	use:clickOutside
	on:outsideclick={() => (isOpen = false)}
	class={'hover:bg-transparent active:bg-transparent' + ' ' + _classRoot}
>
	<details bind:open={isOpen} on:click={() => !isOpen} aria-hidden="true">
		<summary
			class:text-primary={isOpen}
			class:after:hidden={!mark}
			class:list-none={!mark}
			class="flex flex-nowrap items-center gap-x-1.5 hover:bg-transparent hover:text-primary active:bg-transparent active:text-primary"
		>
			<slot name="trigger" />
			{#if mark}
				<span class:rotate-180={isOpen} class="rotate transition-transform duration-150">
					<ChevronDown size="16" absoluteStrokeWidth={true} strokeWidth="2.5" />
				</span>
			{/if}
		</summary>
	</details>
	{#if isOpen}
		<div
			transition:fadeSlide={{ duration: 250 }}
			class={'top-full m-0 rounded-b-2xl rounded-t-none border-t-4 border-primary bg-base-200 p-2 shadow-xl drop-shadow-xl' +
				' ' +
				_class +
				` ${align}-0 min-w-[${minWidth}]`}
		>
			<slot />
		</div>
	{/if}
</div>
