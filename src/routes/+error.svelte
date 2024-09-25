<script lang="ts">
	import { onMount } from 'svelte'
	import PageLoader from '$lib/components/global/page-loader.svelte'

	let loader: boolean = true

	onMount(async () => {
		loader = false
	})
</script>

<PageLoader {loader} />

<div class="hero h-screen">
	<div class="hero-content flex-col">
		<img src="/assets/images/404.png" alt="Not Found" class="w-full max-w-4xl object-cover" />
		<div class="text-center">
			<h1 class="text-5xl font-bold text-white">Oops... Page Not Found!</h1>
			<p class="py-6">The page you looking for not found may be it not exist or removed.</p>
			<a href="/" title="Go to Home page" class="btn btn-primary text-white"
				>Back to Home page</a
			>
		</div>
	</div>
</div>
