<script lang="ts">
	import LogoIcon from '$lib/icons/logo.svelte'
	import { configStore } from '$lib/stores/config'

	export let _class: string = ''
</script>

<div class={_class}>
	<a href="/" title="Go to Home page" class="flex items-center text-2xl">
		<LogoIcon />
		<span class="ml-2 max-w-40 font-black text-primary">
			Streaming <span class="text-base-content" class:text-white={$configStore?.isDarkMode}>Service</span>
		</span>
	</a>
</div>
