<script lang="ts">
	import Artist from '$root/components/artist.svelte'
	import type { ArtistType } from '$root/types'

	export let artists: ArtistType[] = []
</script>

<h1>Artists</h1>

{#each artists as artist (artist.id)}
	<Artist {artist} />
{/each}
