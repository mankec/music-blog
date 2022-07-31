<script lang="ts">
	import Artist from '$root/components/artist.svelte'
	import AddAlbum from '$root/components/add_album.svelte'
	import AlbumList from '$root/components/album_list.svelte'

	import type { ArtistType } from '$root/types'
	import type { AlbumType } from '$root/types'

	export let artist: ArtistType
	export let albums: AlbumType[] = []
</script>

<Artist {artist} />

<div class="add-album">
	<AddAlbum />
</div>

<ul>
	{#each albums as album (album.id)}
		<AlbumList {album} />
	{/each}
</ul>

<style>
	.click {
		margin-bottom: 5rem;
	}

	.add-album {
		margin-bottom: 2rem;
	}
</style>
