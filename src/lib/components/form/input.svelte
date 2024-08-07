<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements'

	export let id: string
	export let value: string = ''
	export let label: string
	export let type: HTMLInputTypeAttribute = 'text'
	export let placeholder: string = ''
	export let required: boolean = false
	export let minlength: number | undefined = undefined
	export let errors: string[] | undefined = undefined
</script>

<div class="form-control">
	<label class="label block p-0">
		<span class="label-text mb-1 block text-error" class:text-white={!errors}>
			{label}
			{#if errors}<span class="label-text text-error">: {errors.join('. ')}</span>{/if}
		</span>
		<input
			name={id}
			{id}
			{placeholder}
			{...{ type }}
			{required}
			bind:value
			{minlength}
			class="input input-bordered w-full"
			aria-invalid={errors ? 'true' : undefined}
		/>
	</label>
</div>
