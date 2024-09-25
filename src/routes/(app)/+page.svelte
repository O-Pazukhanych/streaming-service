<script lang="ts">
	import MainSlider from '$lib/components/sliders/main-slider.svelte'
	import MovieList from '$lib/components/movie/movie-list.svelte'
	import CartoonsSection from '$lib/sections/home/cartoons-section.svelte'
	import SeriesSection from '$lib/sections/home/serials-section.svelte'
	import { onMount } from 'svelte'
	import type { MovieLists } from '$lib/types/pages/home'
	import axios from 'axios'

	const homePageMovieLists: MovieLists = {
		mainBillboard: [],
		novelties: [],
		wellRated: [],
		mostLiked: [],
		cartoons: [],
		serials: []
	};

	let loadingData: boolean = true;

	onMount(async () => {
		loadingData = true;
		homePageMovieLists.mainBillboard = await axios.get('/api/movie/billboard/main').then(res => res.data);
		homePageMovieLists.novelties = await axios.get('/api/movie/list', {
			params: {
				orderKey: JSON.stringify({
					year: 'desc'
				}),
			}
		}).then(res => res.data);
		homePageMovieLists.wellRated = await axios.get('/api/movie/list', {
			params: {
				orderKey: JSON.stringify({
					imdb: 'desc'
				}),
			}
		}).then(res => res.data);
		homePageMovieLists.mostLiked = await axios.get('/api/movie/list', {
			params: {
				orderKey: JSON.stringify({
					movieReview: {
						liked: 'desc'
					}
				}),
			}
		}).then(res => res.data);
		homePageMovieLists.cartoons = await axios.get('/api/movie/cartoon/list', {}).then(res => res.data);
		homePageMovieLists.serials = await axios.get('/api/movie/serials/list', {}).then(res => res.data);
		loadingData = false;
	})
</script>

<div class="xs:py-6">
	<MainSlider
		_class="max-h-[480px] xl:max-h-[520px] 2xl:max-h-[640px] xs:max-md:container"
		movieList={homePageMovieLists.mainBillboard}
	/>
</div>
<div class="container max-xs:mt-4 md:mt-8 xl:mt-12">
	<MovieList title="The latest novelties" movieList={homePageMovieLists.novelties} {loadingData} />
</div>
<div class="container mt-8 max-xs:mt-4 xl:mt-12">
	<MovieList title="Well Rated" sliderMode={true} movieList={homePageMovieLists.wellRated} {loadingData} />
</div>
<CartoonsSection
	title="Fantasy cartoons"
	movieList={homePageMovieLists.cartoons}
	_class="max-xs:mt-4 mt-8 xl:mt-12"
	{loadingData}
/>
<div class="container mt-8 max-xs:mt-4 xl:mt-12">
	<MovieList title="Most Liked" sliderMode={true} movieList={homePageMovieLists.mostLiked} {loadingData} />
</div>
<SeriesSection
	title="Best Serials"
	movieList={homePageMovieLists.serials}
	_class="max-xs:mt-4 mt-8 xl:mt-12"
	{loadingData}
/>
