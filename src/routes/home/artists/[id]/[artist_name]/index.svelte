<script lang="ts">
	import Artist from '$root/components/artist.svelte'
	import AddAlbum from '$root/components/add_album.svelte'
	import AlbumList from '$root/components/album_list.svelte'
	import AddGenre from '$root/components/genre/add_genre.svelte'
	import GenreList from '$root/components/genre/genre_list.svelte'
	import AddTrack from '$root/components/add_track.svelte'
	import TrackList from '$root/components/track_list.svelte'

	import type { ArtistType } from '$root/types'
	import type { AlbumType } from '$root/types'
	import type { GenreType } from '$root/types'
	import type { TrackType } from '$root/types'

	export let artist: ArtistType
	export let albums: AlbumType[] = []
	export let genres: GenreType[] = []
	export let tracks: TrackType[] = []
</script>

<div class="add-album">
	<AddAlbum {artist} />
</div>

<Artist {artist} />

<AddGenre />

<ul>
	{#each genres as genre (genre.id)}
		<GenreList {genre} />
	{/each}
</ul>

<AddTrack />

<ul>
	{#each tracks as track (track.id)}
		<TrackList {track} />
	{/each}
</ul>

<ul>
	{#each albums as album (album.id)}
		<AlbumList {album} {artist} />
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
