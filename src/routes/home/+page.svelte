<script lang="ts">
	import { page } from '$app/stores'
	import Home from '$root/components/home.svelte'
</script>

{#if $page.data.user}
	<Home />
{/if}
