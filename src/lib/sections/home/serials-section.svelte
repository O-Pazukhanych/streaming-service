<script lang="ts">
	import { configStore } from '$lib/stores/config.js'
	import { ChevronsRight } from 'lucide-svelte'
	import MovieList from '$lib/components/movie/movie-list.svelte'
	import ButtonMain from '$lib/components/global/buttons/button-main.svelte'
	import type { Movie } from '$lib/types/movie'

	export let _class: string = ''
	export let title: string = ''
	export let movieList: Movie[] = []
	export let loadingData: boolean = true
</script>

<div
	class:before:bg-transparent={!$configStore?.isDarkMode}
	class={"section relative bg-[url('/assets/images/sections/series-background.jpg')] bg-cover bg-fixed bg-no-repeat py-8 shadow-top before:absolute before:top-0 before:h-full before:w-full before:bg-black before:bg-opacity-60 before:shadow-2xl md:py-16 lg:py-24" +
		' ' +
		_class}
>
	<div class="container relative z-10 text-center">
		<h2 class="text-3xl font-bold text-white xs:text-4xl sm:text-5xl">{title}</h2>
		<MovieList showHeader={false} {movieList} _class="my-8" _cardClass="section-white" {loadingData} />
		<ButtonMain href="/" type="link" defaultHover={true} _class="uppercase font-semibold">
			<span>view all</span>
			<span slot="icon-after"><ChevronsRight /></span>
		</ButtonMain>
	</div>
</div>

<style lang="scss">
	.section {
		&:after {
			content: '';
			@apply absolute bottom-0 h-full w-full;
			background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%);
		}
	}
</style>
