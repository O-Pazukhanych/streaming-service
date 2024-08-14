<script lang="ts">
	import MovieCard from '$lib/components/movie/movie-card.svelte'
	import { configStore } from '$lib/stores/config'
	import type { Movie } from '$lib/types/movie'
	import { A11y, Autoplay, Lazy, Navigation } from 'swiper'
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { ChevronsRight } from 'lucide-svelte'
	import ButtonMain from '$lib/components/global/buttons/button-main.svelte';

	export let title: string = ''
	export let sliderMode: boolean = false
	export let movieList: Movie[] = []
	export let _class: string = ''
	export let _cardClass: string = ''
	export let showHeader: boolean = true
</script>

<div class={'movie-list' + ' ' + _class}>
	<div
		class:hidden={!showHeader}
		class:text-white={$configStore?.isDarkMode}
		class="mb-4 flex items-center justify-between lg:mb-8"
	>
		<h2 class="text-3xl font-bold">{title}</h2>
		<ButtonMain href='/' type="link" defaultHover={true} _class="uppercase font-semibold" >
			<span>view all</span>
			<span slot="icon-after"><ChevronsRight /></span>
		</ButtonMain>
	</div>
	{#if !movieList.length}
		<div
			class="grid-flow-row grid-cols-3 gap-4 sm:grid md:grid-cols-4 xl:gap-8 2xl:grid-cols-5"
		>
			{#each Array(4).fill(0) as skeleton}
				<MovieCard _class={_cardClass} />
			{/each}
		</div>
	{:else}
		<div
			class:sm:grid={!sliderMode}
			class="hidden grid-flow-row grid-cols-3 gap-4 md:grid-cols-4 xl:gap-8 2xl:grid-cols-5"
		>
			{#each movieList as movie}
				<MovieCard {movie} _class={_cardClass} />
			{/each}
		</div>
		<div class:sm:hidden={!sliderMode}>
			<Swiper
				modules={[Navigation, Autoplay, Lazy, A11y]}
				loop={true}
				slidesPerView={1.5}
				spaceBetween={16}
				autoplay={{
					delay: 10000
				}}
				speed={1000}
				navigation
				preloadImages={false}
				lazy={{
					loadPrevNext: true,
					loadPrevNextAmount: 2
				}}
				centeredSlides={true}
				breakpoints={{
					1780: {
						spaceBetween: 32,
						slidesPerView: 5,
						centeredSlides: false
					},
					1440: {
						spaceBetween: 32,
						slidesPerView: 4,
						centeredSlides: false
					},
					768: {
						spaceBetween: 16,
						slidesPerView: 4,
						centeredSlides: false
					},
					640: {
						spaceBetween: 16,
						slidesPerView: 3,
						centeredSlides: false
					},
					375: {
						spaceBetween: 16,
						slidesPerView: 2,
						centeredSlides: false
					}
				}}
			>
				{#each movieList as movie}
					<SwiperSlide>
						<MovieCard {movie} _class={_cardClass} />
					</SwiperSlide>
				{/each}
			</Swiper>
		</div>
	{/if}
</div>
