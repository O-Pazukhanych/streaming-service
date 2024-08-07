<script lang="ts">
	import Header from '$lib/components/global/header/header.svelte'
	import Footer from '$lib/components/global/footer/footer.svelte'
</script>

<div class="min-w-screen flex min-h-screen flex-col">
	<Header />
	<main class="flex-auto">
		<slot />
	</main>
	<Footer />
</div>
