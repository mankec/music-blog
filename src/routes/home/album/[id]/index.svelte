<script lang="ts">
	import hold_your_colour from '$lib/assets/hold_your_colour.jpg'

	import Album from '$root/components/album.svelte'
	import GenreList from '$root/components/genre/genre_list.svelte'
	import TrackList from '$root/components/track_list.svelte'

	import type { AlbumType } from '$root/types'
	import type { GenreType } from '$root/types'
	import type { TrackType } from '$root/types'

	export let album: AlbumType
	export let genres: GenreType[] = []
	export let tracks: TrackType[] = []

	export function index(array: any, t: any) {
		return array.indexOf(t) + 1
	}

	export let genre_name = ''
	export let track_name = ''
</script>

<div class="container">
	<div class="image-genre">
		<div class="image">
			<img src={hold_your_colour} alt="" />
		</div>
		<div class="genre">
			<ul>
				{#each genres as genre}
					<li class="genre-name">
						<a href="#"
							>{JSON.stringify(genre.genre_name)}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="header-songs">
		<div class="header" />
		<div class="songs">
			<div class="square-plus-flex">
				<form
					action=""
					method="post"
					class="flex-genre-track-buttons"
				>
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
					{#each tracks as track}
						<li>
							<span>{index(tracks, track)}</span>
							<h3>{track.track_name}</h3>
						</li>
					{/each}
				</ol>
			</div>
		</div>
	</div>
</div>

<style>
	.btn {
		border: none;
		padding: 0;
		font-size: 1rem;
		background: none;
		border-radius: 0.25em;
	}
	.btn:hover {
		cursor: pointer;
	}

	.container {
		width: 90%;
		height: 100%;
		background-color: blue;
		margin-left: 0;
		margin-right: auto;
		display: flex;
	}

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

	.songs {
		width: 52rem;
		margin: 0 auto;
	}

	.fa-square-plus {
		color: greenyellow;
		font-size: 3.5em;
		height: 100%;
	}

	.square-plus-flex {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.add-genre-track-flex {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	input[type='text'].add-genre-track-input {
		width: 100%;
		height: 100%;

		padding: 6px 8px;
		border: 1px solid #ccc;
		border-radius: 0.25em;
	}

	.flex-genre-track-buttons {
		display: flex;
		justify-content: space-between;
	}

	.song-list {
		margin-top: 3.6rem;
	}

	.song-list ol {
		font-size: 1.6rem;
	}

	.song-list li {
		list-style: none;

		margin-left: 1.5rem;
		margin-bottom: 0.75rem;

		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 0.75rem;
	}

	.song-list span {
		width: 5%;

		padding: 2px;
		font-weight: bold;
		color: white;

		display: flex;
		justify-content: center;
		align-items: center;

		border: 1px solid lime;
		border-radius: 50%;
	}

	.song-list h3 {
		width: 100%;

		font-size: 15px;

		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.genre {
		background-color: lime;
		width: 55rem;
		height: 10rem;

		height: 10%;

		background-color: green;
		display: flex;
		justify-content: flex-start;
	}

	.genre li {
		margin: 1rem;
		padding: 4px;
		font-weight: bold;
		border: 2px solid orange;
		border-radius: 25px;

		display: inline-block;
	}

	.genre li a {
		font-size: 14px;
		color: orange;
		text-decoration: none;
	}
	.genre li a:hover {
		color: yellow;
		text-decoration: underline;
	}
</style>
