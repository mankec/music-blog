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

<h1>
	<li>
		<a
			href="{slugify(artist.artist_name)}/{slugify(
				album.album_name
			)}
			">{album.album_name}</a
		>
	</li>
</h1>

<!-- <div class="album-block">
	<div class="album-block-1">
		<div class="album-header">
			<div class="album-name">
				<h2>{album.album_name}</h2>
			</div>
			<div class="album-release-date">
				<span>{album.year_of_release}</span>
			</div>
		</div>
		<div class="album-cover-container">
			<img
				src="images/hold_your_colour.jpg"
				alt="album cover"
			/>
		</div>
	</div>

	<div class="genre-tags">
		<ul>
			{#each genre_names[0] as genre}
				<li class="genre">
					<a href="/pages/genres/{genre}">{genre}</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="album-block-2">
		<div class="sub-album-block-2">
			<div class="album-songs-container">
				<div class="album-list-header">
					<span>Songs</span>
				</div>
				<div class="album-list-container">
					<ol>
						{#each track_names[0] as track}
							<li class="album-list">
								<span />
								<h3>{track}</h3>
							</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>
</div> -->
<style>
</style>
