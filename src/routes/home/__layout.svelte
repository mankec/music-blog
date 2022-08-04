<script lang="ts">
	import { page } from '$app/stores'
	import Navigation from '$root/components/navigation.svelte'
</script>

{#if $page.url.pathname === '/mb/home'}
	<slot />
{:else}
	<Navigation />

	<slot />
{/if}

<style>
</style>
