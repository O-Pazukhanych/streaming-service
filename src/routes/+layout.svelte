<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import PageLoader from '$lib/components/global/page-loader.svelte';

	let loader: boolean;
	let loaderTimeout: ReturnType<typeof setTimeout>;

	$: if ($page.url.pathname) {
		loader = true;
	 	loaderTimeout = setTimeout(() => {
			loader = false;
		}, 500)
	}

	onDestroy(() => {
		clearTimeout(loaderTimeout);
	})
</script>

<PageLoader {loader} />

<slot />
