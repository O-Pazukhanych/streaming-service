<script lang="ts">
	import { SearchX } from 'lucide-svelte'

	export let _class: string = ''
</script>

<div class={"flex flex-col items-center justify-center w-full h-full" + ' ' + _class}>
	<SearchX size="64" class="mb-4"/>
	<h4 class="text-3xl font-bold mb-2">No results found</h4>
	<span>Please try again later or contact us if the problem persists</span>
</div>
