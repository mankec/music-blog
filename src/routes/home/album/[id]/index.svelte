<script lang="ts">
	import hold_your_colour from '$lib/assets/hold_your_colour.jpg'
	import { base } from '$app/paths'

	import Album from '$root/components/album.svelte'
	import GenreList from '$root/components/genre/genre_list.svelte'
	import TrackList from '$root/components/track_list.svelte'

	import type { AlbumType } from '$root/types'
	import type { GenreType } from '$root/types'
	import type { TrackType } from '$root/types'
	import Genre from '$root/components/genre/genre.svelte'

	export let album: AlbumType
	export let genres: GenreType[] = []
	export let tracks: TrackType[] = []

	export function index(array: any, t: any) {
		return array.indexOf(t) + 1
	}

	export let genre_name = ''
	export let track_name = ''
	let album_cover = ''
	let fileInput: any
	let files: any

	function getBase64(image: any) {
		const reader: any = new FileReader()
		reader.readAsDataURL(image)
		reader.onload = (e: any) => {
			album_cover = e.target.result
			uploadFunction(e.target.result)
		}
	}

	async function uploadFunction(imgBase64) {
		const data = {}
		const imgData = imgBase64.split(',')
		data['image'] = imgData[1]
		console.log(data)
		await fetch(`/upload`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(data)
		})
	}
</script>

<div class="container">
	<div class="image-genre">
		<div class="image">
			<img
				id="album_cover"
				src={album_cover}
				alt="Album cover"
			/>
		</div>
		<div class="genre">
			<ul>
				{#each genres as genre}
					<li class="genre-name">
						<a href="{base}/home/genre/{genre.id}"
							>{genre.genre_name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="header-songs">
		<div class="header">
			<h1>
				{album.album_name}
				<span>({album.year_of_release})</span>
			</h1>
		</div>
		<div class="songs">
			<div class="square-plus-flex">
				<form
					class="flex-genre-track-buttons"
					action=""
					method="post"
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
					<input
						class="hidden"
						name="album_cover"
						id="file-to-upload"
						type="file"
						accept=".png,.jpg"
						bind:files
						bind:this={fileInput}
						on:change={() => getBase64(files[0])}
					/>
					<button
						class="upload-btn"
						on:click={() => fileInput.click()}
						>Upload</button
					>
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
	.hidden {
		display: none;
	}

	.upload-btn {
		width: 128px;
		height: 32px;
		background-color: black;
		font-family: sans-serif;
		color: white;
		font-weight: bold;
		border: none;
	}

	.upload-btn:hover {
		background-color: white;
		color: black;
		outline: black solid 2px;
	}

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

	.header-songs {
		margin-top: 2.5rem;
		background-color: yellow;
		width: 55rem;
		height: 75rem;
	}

	.header {
		background-color: green;
		width: 55rem;
		height: auto;

		display: flex;
		align-items: center;
	}

	.header h1 {
		font-size: 2.6rem;
		color: green;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 1rem;
	}

	.header span {
		margin-left: 0.1em;
		color: black;
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
		height: auto;

		background-color: green;
		display: flex;
		justify-content: flex-start;
	}

	.genre li {
		margin: 1rem;
		padding: 0.5rem 0.75rem;
		font-weight: bold;
		border: 2px solid orange;
		border-radius: 0.8em;

		display: inline-block;
	}

	.genre li a {
		font-size: 14px;
		text-decoration: none;
	}
	.genre li a:hover {
		text-decoration: underline;
	}
</style>
