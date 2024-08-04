<script lang="ts">
	import { MapPin } from 'lucide-svelte'
	import { Google, GitHub } from '$lib/icons/react-icons'
	import Logo from '$lib/components/global/logo.svelte'
	import Input from '$lib/components/form/input.svelte'
	import type { AuthFormVariant } from '$lib/types/auth'

	let formVariant: AuthFormVariant = 'login'
	$: isLogin = formVariant === 'login'
	function toggleFormVariant(): void {
		formVariant = isLogin ? 'register' : 'login'
	}
</script>

<div class="join flex h-screen w-screen overflow-x-hidden">
	<div class="join-item hidden h-full w-1/2 bg-base-200 md:block">
		<div
			class="hero h-full w-full bg-[url(/assets/images/layout.jpg)] bg-cover bg-fixed bg-no-repeat"
		>
			<Logo _class="absolute top-10 left-8" />
			<div class="hero-overlay bg-black bg-opacity-70" />
			<div class="hero-content text-white">
				<div class="max-w-[620px] px-4">
					<h2 class="mb-3 text-[2.5rem] font-semibold leading-[4rem]">
						Let's talk about all things!
					</h2>
					<p class="mb-12 leading-6">
						We’re here to help and answer any question you might have. Write to us or
						give us a call. We will reply to you as soon as possible. But yes, it can
						take up to 24 hours.
					</p>
					<ul class="flex flex-col gap-y-6">
						<li class="flex">
							<MapPin class="mr-2 size-5" />
							<a
								href="mailto:o.pazukhanych@gmail.com"
								title="Contact us by email"
								class="hover:text-primary active:text-primary"
							>
								o.pazukhanych@gmail.com
							</a>
						</li>
						<li class="flex">
							<MapPin class="mr-2 size-5" />
							<a
								href="tel:066-583-0376"
								title="Contact us by phone number"
								class="hover:text-primary active:text-primary"
							>
								(066) 583-0376
							</a>
						</li>
						<li class="flex">
							<MapPin class="mr-2 size-5" />
							Ternopil
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="join-item h-full w-full md:w-1/2">
		<div class="hero h-full w-full">
			<div class="hero-content w-[inherit] max-w-xl flex-col items-start px-8 text-white">
				<h2
					class="mb-8 text-5xl font-semibold max-lg:mb-6 max-lg:text-[2.5rem] max-xs:mb-4 max-xs:text-4xl"
				>
					{isLogin ? 'Login' : 'Create Account'}
				</h2>
				<div class="flex w-full flex-col border-opacity-50">
					<div class="card place-items-center">
						<div class="join w-full gap-x-4 max-lg:flex-col max-lg:gap-y-4">
							<button
								class="btn btn-outline flex-[50%] capitalize"
								title={isLogin
									? 'Log in with your Google account'
									: 'Create a new user with Google'}
							>
								<Google />
								{isLogin ? 'login by google' : 'sign up with google'}
							</button>
							<button
								class="btn btn-outline flex-[50%] capitalize"
								title={isLogin
									? 'Log in with your GitHub account'
									: 'Create a new user with GitHub'}
							>
								<GitHub />
								{isLogin ? 'login by git' : 'sign up with git'}
							</button>
						</div>
					</div>
					<div class="divider">OR</div>
					<div class="card">
						<div class="card w-full">
							<form class="card-body gap-y-6 p-0">
								<div class="flex flex-col gap-y-6">
									<Input
										type="text"
										id="name"
										label="Username"
										placeholder="Enter your username"
										required={true}
									/>
									{#if !isLogin}
										<Input
											type="email"
											id="email"
											label="Email"
											placeholder="Enter your email"
											required={true}
										/>
									{/if}
									<Input
										type="password"
										id="password"
										label="Password"
										placeholder="Password"
										required={true}
									/>
								</div>
								<div>
									<div class="form-control mb-2">
										<button
											class="btn btn-primary text-[1rem] font-medium text-white hover:bg-transparent active:bg-transparent"
											title={isLogin
												? 'Log in with your account'
												: 'Create a new user account'}
										>
											{isLogin ? 'Login' : 'Create account'}
										</button>
									</div>
									<p
										class="text-sm text-base-content"
										class:text-center={!isLogin}
									>
										{isLogin
											? 'First time using Streaming-Service?'
											: 'Already have an account?'}
										<span
											class="link-hover link text-primary"
											title={isLogin
												? 'Go to register form'
												: 'Go to account login'}
											on:click={toggleFormVariant}
											aria-hidden="true"
										>
											{isLogin ? 'Sign Up' : 'Login'}
										</span>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
