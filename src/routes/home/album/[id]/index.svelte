<script lang="ts">
	import hold_your_colour from '$lib/assets/hold_your_colour.jpg'
	import { base } from '$app/paths'
	import { enhance } from '$lib/form'

	import Album from '$root/components/album.svelte'
	import GenreList from '$root/components/genre_list.svelte'
	import TrackList from '$root/components/track_list.svelte'

	import type { AlbumType } from '$root/types'
	import type { GenreType } from '$root/types'
	import type { TrackType } from '$root/types'
	import Genre from '$root/components/genre.svelte'
	import AddGenre from '$root/components/add_genre_or_track.svelte'
	import AddGenreOrTrack from '$root/components/add_genre_or_track.svelte'

	export let album: AlbumType
	export let genres: GenreType[] = []
	export let tracks: TrackType[] = []

	export function index(tracks: any, track: any) {
		return tracks.indexOf(track) + 1
	}
</script>

<div class="container">
	<div class="flex-between">
		<div class="header">
			<h1>
				{album.album_name}<span
					>({album.year_of_release})</span
				>
			</h1>
			<ul class="genre-list">
				{#each genres as genre}
					<a href="{base}/home/genre/{genre.id}"
						><li>{genre.genre_name}</li></a
					>
				{/each}
			</ul>
			<ol class="song-list">
				{#each tracks as track}
					<li>
						<span>{index(tracks, track)}</span>
						<h3>{track.track_name}</h3>
					</li>
				{/each}
			</ol>
		</div>
		<div class="add-artist">
			<AddGenreOrTrack />
		</div>
	</div>
</div>

<style>
	.flex-between {
		display: flex;
		justify-content: space-between;
	}

	.add-artist {
		width: 40%;
		height: 100%;

		align-self: flex-start;
	}

	.container {
		width: 68%;
		height: 100%;
		margin: 0 auto;
		/* background-color: blue; */
	}

	.header {
		padding: 1rem;
	}

	.header h1 {
		font-size: 3.6rem;
		align-self: flex-start;
		padding-bottom: 0.1rem;
		border-bottom: 3px solid lime;
	}

	.genre-list {
		margin-top: 2rem;
		list-style: none;

		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.genre-list li {
		font-size: 1.6rem;
		margin: 0.25rem;
	}

	.song-list {
		margin-top: 2.5rem;
		list-style: none;
	}

	.song-list li:first-child {
		display: flex;
		align-content: center;
		margin-top: 0;
	}

	.song-list li {
		display: flex;
		align-items: center;
		margin-top: 1rem;
	}

	.song-list li span {
		width: 2.8rem;
		margin-right: 1.2rem;
		padding: 0.25rem;
		font-size: 1.8rem;
		text-align: center;
		border: 1px solid black;
	}

	.song-list li h3 {
		font-size: 1.8rem;
	}
</style>
