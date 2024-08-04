<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements'

	export let id: string
	export let value: string = ''
	export let label: string
	export let type: HTMLInputTypeAttribute = 'text'
	export let placeholder: string = ''
	export let required: boolean = false
</script>

<div class="form-control">
	<label class="label block p-0">
		<span class="label-text mb-1 block text-white">{label}</span>
		<input
			name={id}
			{id}
			{placeholder}
			{...{ type }}
			{required}
			bind:value
			class="input input-bordered w-full"
		/>
	</label>
</div>
