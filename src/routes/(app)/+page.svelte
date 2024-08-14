<script lang="ts">
	import type { PageData } from './$types'
	import MainSlider from '$lib/components/sliders/main-slider.svelte'
	import MovieList from '$lib/components/movie/movie-list.svelte'
	import CartoonsSection from '$lib/sections/home/cartoons-section.svelte'
	import SeriesSection from '$lib/sections/home/series-section.svelte';

	export let data: PageData
</script>

<div class="xs:py-6">
	<MainSlider
		_class="max-h-[480px] xl:max-h-[520px] 2xl:max-h-[640px] xs:max-md:container"
		movieList={data.movies.suggestions}
	/>
</div>
<div class="container max-xs:mt-4 md:mt-8 xl:mt-12">
	<MovieList title="Suggestions" movieList={data.movies.suggestions} />
</div>
<div class="container mt-8 max-xs:mt-4 xl:mt-12">
	<MovieList title="Well Rated" sliderMode={true} movieList={data.movies.suggestions} />
</div>
<CartoonsSection
	title="Fantasy cartoons"
	movieList={data.movies.suggestions}
	_class="max-xs:mt-4 mt-8 xl:mt-12"
/>
<div class="container mt-8 max-xs:mt-4 xl:mt-12">
	<MovieList title="Most Liked" sliderMode={true} movieList={data.movies.suggestions} />
</div>
<SeriesSection
	title="Best Series"
	movieList={data.movies.suggestions}
	_class="max-xs:mt-4 mt-8 xl:mt-12"
/>
