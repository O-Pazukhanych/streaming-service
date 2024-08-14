<script lang="ts">
	import { Navigation, EffectCoverflow, Autoplay, Lazy, A11y } from 'swiper'
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import MainSliderPoster from '$lib/components/posters/main-slider-poster.svelte'
	import type { Movie } from '$lib/types/movie'

	export let movieList: Movie[] = []
	export let _class: string = ''
</script>

<div class={'main-slider' + ' ' + _class}>
	{#if !movieList.length}
		<Swiper
			modules={[Navigation, EffectCoverflow, Autoplay, Lazy, A11y]}
			effect="coverflow"
			loop={true}
			slidesPerView={1}
			autoplay={{
				delay: 20000
			}}
			speed={2400}
			height={480}
			navigation
			preloadImages={false}
			lazy={{
				loadPrevNext: true,
				loadPrevNextAmount: 2
			}}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true
			}}
			breakpoints={{
				768: {
					slidesPerView: 3
				}
			}}
		>
			{#each Array(3).fill(0) as skeleton}
				<SwiperSlide>
					<MainSliderPoster />
				</SwiperSlide>
			{/each}
		</Swiper>
	{:else}
		<Swiper
			modules={[Navigation, EffectCoverflow, Autoplay, A11y]}
			effect="coverflow"
			loop={true}
			slidesPerView={1}
			autoplay={{
				delay: 20000
			}}
			speed={2400}
			height={480}
			navigation
			preloadImages={false}
			lazy={{
				loadPrevNext: true,
				loadPrevNextAmount: 2
			}}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true
			}}
			breakpoints={{
				768: {
					slidesPerView: 3
				}
			}}
		>
			{#each movieList as movie}
				<SwiperSlide>
					<MainSliderPoster {movie} />
				</SwiperSlide>
			{/each}
		</Swiper>
	{/if}
</div>
