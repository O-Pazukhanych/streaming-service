<script lang="ts">
	import Header from '$lib/components/global/header/header.svelte'
	import Footer from '$lib/components/global/footer/footer.svelte'
</script>

<div class="min-w-screen flex min-h-screen flex-col overflow-x-hidden">
	<Header />
	<main class="flex-auto pt-[68px]">
		<slot />
	</main>
	<Footer />
</div>
