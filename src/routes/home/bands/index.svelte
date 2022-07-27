<script lang="ts">
	import Band from '$root/components/band.svelte'
	// import type { AlbumType } from '$root/types'
	import type { ArtistType } from '$root/types'

	// export let albums: AlbumType[] = []
	export let artists: ArtistType[] = []
</script>

<h1>Bands</h1>

{#each artists as artist (artist.id)}
	<Band {artist} />
{/each}
