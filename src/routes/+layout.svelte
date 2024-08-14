<script lang="ts">
	import 'swiper/css'
	import 'swiper/css/navigation'
	import 'swiper/css/lazy'
	import 'swiper/css/effect-coverflow'
	import '../app.css'
	import { page } from '$app/stores'
	import { onDestroy } from 'svelte'
	import PageLoader from '$lib/components/global/page-loader.svelte'
	import { FlatToast, ToastContainer } from 'svelte-toasts'
	import { configStore } from '$lib/stores/config'
	import { sessionStore } from '$lib/stores/session'
	import { browser } from '$app/environment'
	import { localStorageConfigStore } from '$lib/stores/local-storage-config'
	import type { ThemeType } from '$lib/types/config'

	export let data

	let loader: boolean
	let loaderTimeout: ReturnType<typeof setTimeout>

	$: if (data.session) sessionStore.set(data.session)

	$: if (browser && !$localStorageConfigStore) {
		localStorageConfigStore.set({
			theme: (localStorage.getItem('theme') as ThemeType) || 'dark'
		})
	}
	$: if (browser && !$configStore) {
		configStore.set({
			currentRoute: $page.url.pathname,
			isDarkMode: localStorage.getItem('theme') === 'dark'
		})
	}

	$: if ($page.url.pathname) {
		if ($page.url.pathname !== $configStore?.currentRoute) {
			configStore.updateCurrentRoute($page.url.pathname)
			loader = true
		}
		loaderTimeout = setTimeout(() => {
			loader = false
		}, 500)
	}
	$: if (browser && $localStorageConfigStore?.theme) {
		document.documentElement.setAttribute('data-theme', $localStorageConfigStore?.theme)
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

<div role="presentation" class="modals-root">
	<ToastContainer placement="bottom-right" let:data>
		<FlatToast {data} />
	</ToastContainer>
</div>
