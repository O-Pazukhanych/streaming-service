<script lang="ts">
	import type { Movie } from '$lib/types/movie'
	import { configStore } from '$lib/stores/config'
	import { CirclePlay, Clock, Heart } from 'lucide-svelte'

	export let movie: Movie | undefined = undefined
	export let _class: string = ''
</script>

{#if !movie}
	<div class="flex w-full flex-col gap-4">
		<div class="skeleton h-[260px] w-full md:h-[240px] lg:h-[340px] xl:h-[470px]"></div>
		<div class="skeleton h-4 w-full"></div>
		<div class="flex items-center justify-between">
			<div class="skeleton h-4 w-24"></div>
			<div class="skeleton h-4 w-24"></div>
		</div>
	</div>
{:else}
	<div class={'movie-card' + ' ' + _class}>
		<a
			href="/"
			class:hover:shadow-white={$configStore?.isDarkMode}
			class:hover:shadow-card={$configStore?.isDarkMode}
			class:hover:shadow-2xl={!$configStore?.isDarkMode}
			class="mb-2 block overflow-hidden rounded-lg border border-base-content transition duration-300"
		>
			<img
				src={movie.poster_url}
				alt={movie.title}
				class="h-[260px] w-full object-cover transition duration-300 md:h-[240px] lg:h-[340px] xl:h-[470px]"
			/>
			<span><CirclePlay class="scale-[3] text-primary lg:scale-[4] xl:scale-[5]" /></span>
		</a>
		<div class="flex flex-col gap-y-1">
			<div
				class:text-white={$configStore?.isDarkMode}
				class="flex items-center justify-between gap-x-1 font-semibold"
			>
				<span>{movie.year}</span>
				<a
					href="/"
					class="inline-block truncate text-primary hover:underline active:underline"
					>{movie.title}</a
				>
				<div class="flex items-center gap-x-1">
					<span><Heart class="scale-75 cursor-pointer" /></span>
					<span>{movie.movieReview?.liked || 0}</span>
				</div>
			</div>
			<div class="flex items-center justify-between text-[0.75rem] font-semibold text-white">
				<span class="rounded-md bg-base-content px-1.5 py-0.5 font-bold"
					>{movie.quality}</span
				>
				<div
					class="flex items-center gap-x-1"
					class:text-base-content={!$configStore?.isDarkMode}
				>
					<span><Clock class="scale-75" /></span>
					<span>{movie.duration} min</span>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.movie-card {
		> a {
			@apply relative;
			span {
				@apply absolute left-1/2 top-1/2 z-10 h-12 w-12 -translate-x-1/4 translate-y-[450%] opacity-0 transition duration-500;
			}
			&:hover,
			&:active {
				img {
					@apply blur-sm;
				}
				span {
					@apply -translate-y-1/2 opacity-100;
				}
			}
		}
		&.section-white {
			@apply text-white;
			div {
				@apply text-white;
			}
		}
	}
</style>
