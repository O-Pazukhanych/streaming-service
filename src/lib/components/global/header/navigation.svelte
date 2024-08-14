<script lang="ts">
	import { routes } from '$lib/config/routes'
	import NavigationItem from '$lib/components/global/header/navigation-item.svelte'

	export let _class: string = ''
</script>

<ul class={'menu' + ' ' + _class}>
	<NavigationItem route={routes.home} />
	<NavigationItem route={routes.movies} />
	<NavigationItem route={routes.series} />
	<NavigationItem route={routes.cartoons} />
	<NavigationItem route={routes.category} />
</ul>
