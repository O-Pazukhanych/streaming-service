<script lang="ts">
	import '../app.css'
	import { page } from '$app/stores'
	import { onDestroy } from 'svelte'
	import PageLoader from '$lib/components/global/page-loader.svelte'

	let loader: boolean
	let loaderTimeout: ReturnType<typeof setTimeout>

	$: if ($page.url.pathname) {
		loader = true
		loaderTimeout = setTimeout(() => {
			loader = false
		}, 500)
	}

	onDestroy(() => {
		clearTimeout(loaderTimeout)
	})
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>

	<title>Streaming-Service</title>
</svelte:head>

<PageLoader {loader} />

<slot />
