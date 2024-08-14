<script lang="ts">
	import MovieList from '$lib/components/movie/movie-list.svelte'
	import type { Movie } from '$lib/types/movie'
	import { configStore } from '$lib/stores/config'
	import { ChevronsRight } from 'lucide-svelte'
	import ButtonMain from '$lib/components/global/buttons/button-main.svelte';

	export let _class: string = ''
	export let title: string = ''
	export let movieList: Movie[] = []
</script>

<div
	class:before:bg-transparent={!$configStore?.isDarkMode}
	class={"section shadow-top bg-[url('/assets/images/sections/cartoons-background.jpg')] bg-cover bg-no-repeat py-8 md:py-16 lg:py-24 relative before:absolute before:h-full before:w-full before:bg-black before:top-0 before:bg-opacity-60 before:shadow-2xl" + ' ' + _class}
>
	<div class="container relative z-10 text-center">
		<h2 class="text-3xl xs:text-4xl sm:text-5xl font-bold text-white">{title}</h2>
		<MovieList showHeader={false} {movieList} _class="my-8" _cardClass="section-white" />
		<ButtonMain href="/" type="link" defaultHover={true} _class="uppercase font-semibold">
			<span>view all</span>
			<span slot="icon-after"><ChevronsRight /></span>
		</ButtonMain>
	</div>
</div>
