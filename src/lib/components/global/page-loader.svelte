<script lang="ts">
	import { onDestroy } from 'svelte'

	export let loader: boolean = true

	let showLoader: boolean
	let loaderTimeout: ReturnType<typeof setTimeout>

	$: {
		showLoader = true
		if (!loader) {
			loaderTimeout = setTimeout(() => {
				showLoader = false
			}, 1000)
		}
	}

	onDestroy(() => {
		clearTimeout(loaderTimeout)
	})
</script>

{#if showLoader}
	<div class="join fixed left-0 top-0 z-[100] flex h-screen w-full overflow-hidden">
		<div
			class="join-item absolute left-0 z-[110] h-full w-1/2 bg-base-200 transition duration-500"
			class:-translate-x-full={!loader}
		/>
		<div
			class="join-item absolute left-1/2 top-1/2 z-[120] -translate-x-1/2 -translate-y-1/2 transform transition duration-300"
			class:opacity-0={!loader}
		>
			<span class="loader animate-spin" />
		</div>
		<div
			class="join-item absolute right-0 z-[110] h-full w-1/2 bg-base-200 transition duration-500"
			class:translate-x-full={!loader}
		/>
	</div>
{/if}
