<script lang="ts">
	import type { Route } from '$lib/types/config'
	import NavigationItem from '$lib/components/global/header/navigation-item.svelte'
	import Dropdown from '$lib/components/modals/dropdown.svelte'
	import { configStore } from '$lib/stores/config'

	export let route: Route | undefined = undefined
</script>

<li
	class="relative text-[1rem] font-semibold capitalize"
	class:text-white={$configStore?.isDarkMode}
>
	{#if route?.details?.length}
		<Dropdown _class="fixed mt-2.5 lg:absolute max-lg:w-full max-lg:-mt-3">
			<span slot="trigger">{route.label}</span>
			<ul class="m-0 grid grid-flow-col grid-rows-5 gap-x-4 gap-y-2 p-0 before:hidden">
				{#each route.details as innerRoute}
					<NavigationItem route={innerRoute} />
				{/each}
			</ul>
		</Dropdown>
	{:else if route}
		<a
			href={route?.href}
			title={`Go to ${route?.label} page`}
			class="hover:bg-transparent hover:text-primary active:bg-transparent active:text-primary"
		>
			{route?.label}
		</a>
	{:else}
		<slot />
	{/if}
</li>
