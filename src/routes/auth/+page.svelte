<script lang="ts">
	import type { PageData } from './$types'
	import { MapPin } from 'lucide-svelte'
	import { Google, GitHub } from '$lib/icons/react-icons'
	import Logo from '$lib/components/global/logo.svelte'
	import type { AuthData, AuthFormVariant } from '$lib/types/auth'
	import { toasts } from 'svelte-toasts'
	import { signIn } from '@auth/sveltekit/client'
	import { superForm } from 'sveltekit-superforms'
	import { zodClient } from 'sveltekit-superforms/adapters'
	import { loginSchema, registerSchema } from '$lib/schemas/auth-schemas'
	import RegisterForm from '$lib/sections/auth/register-form.svelte'
	import LoginForm from '$lib/sections/auth/login-form.svelte'
	import { validateResponse } from '$lib/utils/response-validator'
	import { goto } from '$app/navigation'

	export let data: PageData

	const {
		form: loginForm,
		constraints: loginConstraints,
		enhance: loginEnhance,
		errors: loginErrors,
		delayed: loginDelayed
	} = superForm(data.loginForm, {
		validators: zodClient(loginSchema),
		validationMethod: 'onblur',
		resetForm: false,
		onUpdated({ form }) {
			if (form.message) validateResponse(form.message)
			if (form.valid) login(form.data)
		}
	})
	const {
		form: registerForm,
		constraints: registerConstraints,
		enhance: registerEnhance,
		errors: registerErrors,
		delayed: registerDelayed
	} = superForm(data.registerForm, {
		validators: zodClient(registerSchema),
		validationMethod: 'onblur',
		resetForm: false,
		onUpdated({ form }) {
			if (form.message) validateResponse(form.message)
			if (form.valid) login(form.data)
		}
	})

	let formVariant: AuthFormVariant = 'login'
	$: isLogin = formVariant === 'login'
	function toggleFormVariant(): void {
		formVariant = isLogin ? 'register' : 'login'
	}

	async function login(data: AuthData): Promise<void> {
		try {
			await signIn('credentials', {
				name: data.name,
				password: data.password,
				redirect: false,
				callbackUrl: '/'
			})
			await goto('/')
		} catch (error) {
			console.log(error)
			toasts.error('Server error.', 'We apologize, please try again later.')
		}
	}
	async function loginByProvider(provider: string): Promise<void> {
		try {
			await signIn(provider, {
				redirect: false,
				callbackUrl: '/'
			})

			toasts.success('Successful Authorization')
		} catch (error) {
			console.log(error)
			toasts.error(error as string)
		}
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
								type="button"
								on:click={() => loginByProvider('google')}
							>
								<Google />
								{isLogin ? 'login by google' : 'sign up with google'}
							</button>
							<button
								class="btn btn-outline flex-[50%] capitalize"
								title={isLogin
									? 'Log in with your GitHub account'
									: 'Create a new user with GitHub'}
								type="button"
								on:click={() => loginByProvider('github')}
							>
								<GitHub />
								{isLogin ? 'login by git' : 'sign up with git'}
							</button>
						</div>
					</div>
					<div class="divider">OR</div>
					<div class="card">
						<div class="card w-full">
							{#if isLogin}
								<LoginForm
									enhance={loginEnhance}
									form={loginForm}
									constraints={loginConstraints}
									errors={loginErrors}
									delayed={$loginDelayed}
									{toggleFormVariant}
								/>
							{:else}
								<RegisterForm
									enhance={registerEnhance}
									form={registerForm}
									constraints={registerConstraints}
									errors={registerErrors}
									delayed={$registerDelayed}
									{toggleFormVariant}
								/>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
