<!-- <script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
	// Suggestion (check code before using, and possibly convert to data.X access later):
	// import type { PageData } from './$types';
	// export let data: PageData;
	// $: ({ error } = data);

	import { session } from '$app/stores'
	import { send } from '$lib/api'

	export let error: string

	async function login(event: SubmitEvent) {
		const formEl = event.target as HTMLFormElement
		const response = await send(formEl)

		if (response.error) {
			error = response.error
		}

		$session.user = response.user

		formEl.reset()
	}
</script>

<form on:submit|preventDefault={login} method="post">
	<div>
		<label for="username">Username</label>
		<input
			id="username"
			name="username"
			type="text"
			required
		/>
	</div>

	<div>
		<label for="password">Password</label>
		<input
			id="password"
			name="password"
			type="password"
			required
		/>
	</div>

	{#if error}
		<p class="error">{error}</p>
	{/if}

	<button type="submit">Sign In</button>
</form>

<style>
	.error {
		color: tomato;
	}
</style> -->
