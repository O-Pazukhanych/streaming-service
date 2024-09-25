<script lang="ts">
	export let _class: string = ''
	export let type: 'link' | 'button' = 'button'
	export let href: string = '#'
	export let defaultHover: boolean = false
</script>

{#if type === 'button'}
	<button
		class:hover:bg-base-200={!defaultHover}
		class:hover:bg-opacity-50={!defaultHover}
		class:active:bg-base-200={!defaultHover}
		class:active:bg-opacity-50={!defaultHover}
		class={'btn btn-primary border-2 font-semibold text-white' + ' ' + _class}
	>
		<slot name="icon-before" />
		<slot />
		<slot name="icon-after" />
	</button>
{:else}
	<a
		{href}
		class:hover:bg-base-200={!defaultHover}
		class:hover:bg-opacity-50={!defaultHover}
		class:active:bg-base-200={!defaultHover}
		class:active:bg-opacity-50={!defaultHover}
		class={'btn btn-primary border-2 font-semibold text-white' + ' ' + _class}
	>
		<slot name="icon-before" />
		<slot />
		<slot name="icon-after" />
	</a>
{/if}
