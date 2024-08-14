<script lang="ts">
	import Navigation from '$lib/components/global/header/navigation.svelte'
	import ProfileMenu from '$lib/components/global/header/profile-menu.svelte'
	import ThemeSwitcher from '$lib/components/theme-switcher.svelte'
	import Dropdown from '$lib/components/modals/dropdown.svelte'
</script>

<header class="fixed z-50 h-[68px] w-full bg-base-300 shadow-xl drop-shadow-xl">
	<div class="container navbar h-full justify-between px-4 lg:px-8 2xl:px-12">
		<div class="navbar-start w-auto">
			<Dropdown
				_class="absolute sm:left-auto -mt-1.5 sm:right-auto min-w-full sm:min-w-[calc(var(--screen-sm)-1rem)] md:min-w-[calc(var(--screen-md)-1rem)] lg:hidden"
				mark={false}
			>
				<div slot="trigger" role="button" class="btn btn-ghost px-1 lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<Navigation _class="menu px-1 justify-evenly w-full sm:menu-horizontal" />
			</Dropdown>
			<a href="/" class="btn btn-ghost px-0 text-xl">
				<span class="max-xs:hidden">Streaming-Service</span>
				<span class="hidden text-left max-xs:block" style="line-height: 1"
					>Streaming<br /> Service</span
				>
			</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<Navigation _class="menu-horizontal px-1" />
		</div>
		<div class="navbar-end w-auto">
			<ThemeSwitcher />
			<ProfileMenu />
		</div>
	</div>
</header>
