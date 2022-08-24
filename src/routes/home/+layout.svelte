<script lang="ts">
	import { page } from '$app/stores'
	import Navigation from '$root/components/navigation.svelte'
	import SignIn from '$root/components/sign_in.svelte'
</script>

{#if !$page.data.user}
	<SignIn />
{/if}

{#if $page.data.user && $page.url.pathname === '/home'}
	<slot />
{/if}

{#if $page.data.user && $page.url.pathname !== '/home'}
	<Navigation />

	<slot />
{/if}

<style>
</style>
