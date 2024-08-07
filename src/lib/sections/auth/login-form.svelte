<script lang="ts">
	import Input from '$lib/components/form/input.svelte'
	import { Loader } from 'lucide-svelte'

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	export let enhance: any
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	export let form: any
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	export let constraints: any
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	export let errors: any
	export let delayed: boolean = false
	export let toggleFormVariant: () => void
</script>

<form class="card-body gap-y-6 p-0" action="?/login" method="POST" use:enhance>
	<div class="flex flex-col gap-y-6">
		<Input
			type="text"
			id="name"
			label="Username"
			placeholder="Enter your username"
			required={true}
			bind:value={$form.name}
			{...$constraints.name}
			errors={$errors.name}
		/>
		<Input
			type="password"
			id="password"
			label="Password"
			placeholder="Password"
			required={true}
			bind:value={$form.password}
			{...$constraints.password}
			errors={$errors.password}
		/>
	</div>
	<div>
		<div class="form-control mb-2">
			<button
				class="btn btn-primary text-[1rem] font-medium text-white hover:bg-transparent active:bg-transparent"
				title="Log in with your account"
			>
				Login{#if delayed}<Loader class="animate-spin" />
				{/if}
			</button>
		</div>
		<p class="text-sm text-base-content">
			First time using Streaming-Service?
			<span
				class="link-hover link text-primary"
				title="Go to register form"
				on:click={toggleFormVariant}
				aria-hidden="true"
			>
				Sign Up
			</span>
		</p>
	</div>
</form>
