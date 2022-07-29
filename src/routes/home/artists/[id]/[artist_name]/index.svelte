<script lang="ts">
	import Artist from '$root/components/artist.svelte'
	import AddAlbum from '$root/components/add_album.svelte'
	import Album from '$root/components/album.svelte'

	import type { ArtistType } from '$root/types'
	import type { AlbumType } from '$root/types'

	export let artist: ArtistType
	export let albums: AlbumType[] = []
</script>

<div class="add-album">
	<AddAlbum {artist} />
</div>

<Artist {artist} />

{#each albums as album (album.id)}
	<Album {album} {artist} />
{/each}

<style>
	.add-album {
		margin-bottom: 2rem;
	}
</style>
