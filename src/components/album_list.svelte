<script lang="ts">
	import type { ArtistType } from '$root/types'
	import type { AlbumType } from '$root/types'

	import { slugify } from '$lib/helper'
	export let artist: ArtistType
	export let album: AlbumType

	export let artist_name = artist.artist_name
	export let album_name = album.album_name
</script>

<li>
	<a
		href="{slugify(artist_name)}/{slugify(album.album_name)}
			">{album_name}</a
	>
</li>

<style>
	li a {
		font-size: 1.6rem;
	}
</style>
