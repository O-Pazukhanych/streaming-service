<script lang="ts">
	import Logo from '$lib/components/global/logo.svelte'
</script>

<footer class="bg-base-300 shadow-top">
	<div
		class="container py-10 text-base-content md:footer max-md:flex max-md:flex-wrap max-md:justify-center max-md:gap-y-0 max-md:pb-0"
	>
		<aside
			class="max-md:flex-full mb-6 max-md:flex max-md:flex-col max-md:items-center md:mb-0"
		>
			<Logo _class="-mt-3" />
			<p class="max-sm:text-center">
				Providing reliable media entertainment services from 2024
			</p>
		</aside>
		<div class="collapse rounded-none max-md:text-center sm:max-md:flex-[33%]">
			<input type="checkbox" class="block md:hidden" />
			<h6 class="footer-title max-md:collapse-title max-md:m-0 max-md:p-0">Services</h6>
			<div class="max-md:collapse-content max-md:-mt-4">
				<nav class="flex flex-col gap-y-3 transition duration-300">
					<a href="/" class="link-hover link">Branding</a>
					<a href="/" class="link-hover link">Design</a>
					<a href="/" class="link-hover link">Marketing</a>
					<a href="/" class="link-hover link">Advertisement</a>
				</nav>
			</div>
		</div>
		<div class="collapse rounded-none max-md:text-center sm:max-md:flex-[33%]">
			<input type="checkbox" class="block md:hidden" />
			<h6 class="footer-title max-md:collapse-title max-md:m-0 max-md:p-0">Company</h6>
			<div class="max-md:collapse-content max-md:-mt-4">
				<nav class="flex flex-col gap-y-3">
					<a href="/" class="link-hover link">About us</a>
					<a href="/" class="link-hover link">Contact</a>
					<a href="/" class="link-hover link">Jobs</a>
					<a href="/" class="link-hover link">Press kit</a>
				</nav>
			</div>
		</div>
		<div class="collapse rounded-none max-md:text-center sm:max-md:flex-[33%]">
			<input type="checkbox" class="block md:hidden" />
			<h6 class="footer-title max-md:collapse-title max-md:m-0 max-md:p-0">Legal</h6>
			<div class="max-md:collapse-content max-md:-mt-4">
				<nav class="flex flex-col gap-y-3">
					<a href="/" class="link-hover link">Terms of use</a>
					<a href="/" class="link-hover link">Privacy policy</a>
					<a href="/" class="link-hover link">Cookie policy</a>
				</nav>
			</div>
		</div>
	</div>
</footer>
