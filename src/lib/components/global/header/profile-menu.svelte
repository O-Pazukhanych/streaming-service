<script lang="ts">
	import { sessionStore } from '$lib/stores/session'
	import Dropdown from '$lib/components/modals/dropdown.svelte'
	import { routes } from '$lib/config/routes'
	import NavigationItem from '$lib/components/global/header/navigation-item.svelte'
	import { signOut } from '@auth/sveltekit/client';
	import { LogIn, LogOut } from 'lucide-svelte'
</script>

<div class="dropdown dropdown-end flex px-1">
	<Dropdown
		mark={false}
		align="right"
		minWidth="120px"
		_class="absolute p-4 px-6 mt-1"
	>
		<div slot="trigger" role="button" class="avatar btn btn-circle btn-ghost">
			<div class="w-10 rounded-full">
				<img alt={$sessionStore?.user?.name} src={$sessionStore?.user?.image} />
			</div>
		</div>
		<ul class="grid grid-flow-rows gap-y-4">
			<NavigationItem route={routes.profile} />
			<NavigationItem route={routes.profile?.innerRoutes?.settings} />
			<NavigationItem>
				{#if $sessionStore?.user?.email}
					<button
						type="button"
						on:click={() => signOut()}
						title="Log out from account"
						class="flex hover:text-primary active:text-primary"
					>
						<span class="whitespace-nowrap mr-2">Sign Out</span><LogOut />
					</button>
				{:else}
					<a
						href={routes.auth.href}
						title="Go to login page"
						class="flex hover:text-primary active:text-primary"
					>
						<LogIn /><span class="whitespace-nowrap ml-2">Sign In</span>
					</a>
				{/if}
			</NavigationItem>
		</ul>
	</Dropdown>
</div>
