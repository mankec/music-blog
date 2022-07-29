<script lang="ts">
	import type { AlbumType } from '$root/types'
	import type { ArtistType } from '$root/types'
	import { slugify } from '$lib/helper'

	export let album: AlbumType
	export let artist: ArtistType

	// export let track_data = album.track_names[0]
	// export let track_names: any =
	// 	Object.values(track_data).slice(1)

	// export let genre_data = album.genre_names[0]
	// export let genre_names: any =
	// 	Object.values(genre_data).slice(1)
</script>

<div class="main-container">
	<div class="container">
		<div class="image-genre">
			<div class="image">
				<img src="images/hold_your_colour.jpg" alt="" />
			</div>
			<div class="genre" />
		</div>
		<div class="header-songs">
			<div class="header" />
			<div class="songs" />
		</div>
	</div>
</div>

<style>
	.image-genre {
		margin-top: 2.5rem;
		margin-left: 2.5rem;
	}

	.image {
		background-color: red;
		width: 55rem;
		height: auto;
	}

	.image img {
		max-width: 100%;
		max-height: auto;
		padding: 1rem;
	}

	.genre {
		background-color: lime;
		width: 55rem;
		height: 10rem;
	}

	.header-songs {
		margin-top: 2.5rem;
		background-color: yellow;
		width: 55rem;
		height: 75rem;
	}

	.header {
		background-color: green;
		width: 55rem;
		height: 7rem;
	}

	.main-container {
		overflow: hidden;
		width: 68%;
		height: 100%;
		background-color: gray;
		margin: 0 auto;
	}

	.container {
		overflow: hidden;
		width: 90%;
		height: 100%;
		background-color: blue;
		margin-left: 0;
		margin-right: auto;
		display: flex;
	}
</style>
