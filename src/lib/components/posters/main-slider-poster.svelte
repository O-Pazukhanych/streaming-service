<script lang="ts">
	import ButtonMain from '$lib/components/global/buttons/button-main.svelte'
	import { Play, Plus } from 'lucide-svelte'
	import type { Movie } from '$lib/types/movie'

	export let movie: Movie | undefined = undefined
</script>

{#if !movie}
	<div class="flex h-[480px] w-full flex-col xl:h-[520px] 2xl:h-[640px]">
		<div class="skeleton h-full w-full"></div>
		<div class="flex flex-col gap-4 p-4">
			<div class="skeleton h-4 w-full"></div>
			<div class="skeleton h-4 w-full"></div>
			<div class="skeleton h-4 w-full"></div>
			<div class="skeleton h-6 w-72"></div>
			<div class="skeleton h-4 w-28"></div>
			<div class="flex gap-x-2">
				<div class="skeleton h-12 w-32"></div>
				<div class="skeleton h-12 w-24"></div>
			</div>
		</div>
	</div>
{:else}
	<div
		class="card image-full h-full w-full bg-base-100 before:hidden before:w-1/2 max-xs:rounded-none"
	>
		<figure>
			<img src={movie.poster_url} alt={movie.title} class="w-full" />
		</figure>
		<div class="card-body mt-auto p-6 xl:p-12 xl:px-8">
			<h2 class="card-title text-4xl font-bold text-white lg:mb-2">{movie.title}</h2>
			<p
				class="mb-4 max-h-[4.25rem] overflow-hidden text-clip font-medium text-white lg:max-h-24"
			>
				{movie.description}
			</p>
			<div class="mb-2">
				<div class="mb-3">
					<div
						class="mr-1 inline rounded-md border border-white bg-base-content bg-opacity-30 px-2 py-1 font-bold text-white"
					>
						<span>{movie.imdb}</span> <span>IMDB</span>
					</div>
					<span
						class="mr-1 rounded-md border border-white bg-base-content bg-opacity-30 px-2 py-1 font-bold text-white"
						>{movie.quality}</span
					>
					<span
						class="mt-2 inline-block text-white md:block md:max-lg:max-w-56 md:max-lg:truncate lg:inline-block"
					>
						{movie.genre.slice(0, 3).join(', ')}
					</span>
				</div>
				<div>
					<span class="font-bold text-white">{movie.year}</span>
					<span class="ml-1 whitespace-nowrap border-l border-white pl-2 text-white"
						>{movie.duration} min</span
					>
				</div>
			</div>
			<div class="card-actions">
				<ButtonMain>
					<span slot="icon-before"><Play /></span>
					<span>Watch now</span>
				</ButtonMain>
				<ButtonMain _class="px-2">
					<span slot="icon-before"><Plus /></span>
					<span class="hidden lg:block">My list</span>
				</ButtonMain>
			</div>
		</div>
	</div>
{/if}

<style lang="css">
	.card.image-full:after {
		content: '';
		left: 0;
		bottom: 0;
		background: linear-gradient(0deg, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 0) 100%);
		@apply absolute z-10 h-full w-full bg-opacity-50;
	}
</style>
