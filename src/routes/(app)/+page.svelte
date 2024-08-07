<script>
	import { page } from '$app/stores'
	import { signOut } from '@auth/sveltekit/client'
</script>

{#if $page.data.session}
	<h2>logged in</h2>
	<button on:click={() => signOut()} class="btn btn-info">sign out</button>
{:else}
	<h2>not logged</h2>
{/if}
