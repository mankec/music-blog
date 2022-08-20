<script lang="ts">
	import type { AlbumType } from '$root/types'
	import type { GenreType } from '$root/types'
	import type { TrackType } from '$root/types'
	import { slugify } from '$lib/helper'
	import hold_your_colour from '$lib/assets/hold_your_colour.jpg'
	import GenreList from './genre_list.svelte'
	import TrackList from './track_list.svelte'

	// export let album: AlbumType
	export let genres: GenreType[]
	export let tracks: TrackType[]

	export let genre_name = ''
	export let track_name = ''
</script>

<!-- <div class="container">
	<div class="image-genre">
		<div class="image">
			<img src={hold_your_colour} alt="" />
		</div>
		<div class="genre">
			<ul>
				{#each genres as genre (genre.id)}
					<GenreList {genre} />
				{/each}
				<li class="genre-name">
					<a href="#">DnB</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="header-songs">
		<div class="header" />
		<div class="songs">
			<div class="square-plus-flex">
				<form action="" class="flex-genre-track-buttons">
					<div class="add-genre-track-flex">
						<button type="submit" class="btn">
							<i
								class="fas fa-regular fa-square-plus"
							/></button
						>
						<input
							class="add-genre-track-input"
							aria-label="Add genre"
							bind:value={genre_name}
							name="genre_name"
							placeholder="Add genre"
							type="text"
						/>
					</div>
					<div class="add-genre-track-flex">
						<button type="submit" class="btn">
							<i
								class="fas fa-regular fa-square-plus"
							/></button
						>
						<input
							class="add-genre-track-input"
							aria-label="Add genre"
							bind:value={track_name}
							name="track_name"
							placeholder="Add a song"
							type="text"
						/>
					</div>
				</form>
			</div>
			<div class="song-list">
				<ol>
					{#each tracks as track (track.id)}
						<TrackList {track} />

						<li>
							<span>1</span>
							<h3>Prelude</h3>
						</li>
					{/each}
				</ol>
			</div>
		</div>
	</div>
</div> -->
<style>
</style>
