<script lang="ts">
	import { base } from '$app/paths'
	import axios from 'axios'

	import AddGenreOrTrack from '$root/components/add_genre_or_track.svelte'
	import type { PageData } from '@sveltejs/kit/types/internal'

	export let data: PageData
	const album = data.album
	const genres = data.genres
	const tracks = data.tracks
	let album_cover: string
	let new_album_cover: string
	let fileinput: HTMLInputElement
	let files: any
	let image_changed: boolean

	export function index(tracks: string[], track: string) {
		return tracks.indexOf(track) + 1
	}

	function get_image(image: Blob) {
		const reader = new FileReader()
		const r = reader.readAsDataURL(image)
		reader.onload = (e: any) => {
			if (e.target.result !== album_cover) {
				image_changed = true
				new_album_cover = e.target?.result
				axios_post(new_album_cover)
			} else image_changed = false
		}
	}

	async function axios_post(imgBase64: any) {
		const data: any = {}
		console.log(imgBase64)
		const imgData = imgBase64.split(',')
		data['image'] = imgData[1]
		axios({
			method: 'post',
			url: `/api/${album.id}`,
			data: {
				data
			}
		})
			.then(function (response) {
				console.log(response)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
</script>

<div
	on:click={() => {
		fileinput.click()
	}}
	class="image-container"
>
	{#if album_cover}
		<img class="album-cover" src={album_cover} alt="" />
	{/if}
	<!-- prettier-ignore -->
	{#if album.cover_img}
		<img
			class="album-cover"
			src="{image_changed ? new_album_cover : `data:image/jpeg;base64,${album.cover_img}`}"
			alt=""
		/>
	{/if}
	<input
		class="hidden"
		id="file-to-upload"
		type="file"
		accept=".png,.jpg"
		bind:files
		bind:this={fileinput}
		on:change={() => get_image(files[0])}
	/>
	<!-- prettier-ignore -->
	<img
		class={album.cover_img || album_cover ? 'hidden' : 'upload'}
		src="https://static.thenounproject.com/png/625182-200.png"
		alt=""
		on:click={() => {
			fileinput.click()
		}}
	/>
</div>
<div class="container">
	<div class="flex-end">
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
			<AddGenreOrTrack {album} />
		</div>
	</div>
</div>

<style>
	.album-cover {
		width: 30rem;
		height: 30rem;
		display: inline;
		border-radius: 50%;
	}

	.hidden {
		display: none;
	}

	.image-container {
		width: 30rem;
		height: 30rem;
		background-color: #ced4da;
		display: inline;
		border-radius: 50%;
		cursor: pointer;

		position: absolute;
		top: 1.25rem;
		left: 3rem;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.upload {
		width: 50px;
		height: 50px;
		margin-top: 18rem;
		cursor: pointer;
		display: block;
	}

	.flex-end {
		display: flex;
		justify-content: flex-end;
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
	}

	.header {
		width: 50%;
		margin-left: 18rem;
	}

	.header h1 {
		margin-top: 1rem;
		font-size: 2.2rem;
		align-self: flex-start;
		color: #ced4da;
		padding-right: 0.8rem;
		padding-bottom: 0.1rem;
		border-bottom: 3px solid #66a80f;

		display: inline-block;
	}

	.genre-list {
		margin-top: 2rem;
		list-style: none;

		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.genre-list li {
		margin: 0.25rem;
		color: #ced4da;
		font-size: 1.6rem;
	}

	.genre-list a {
		text-decoration: none;
	}

	.genre-list a:hover {
		text-decoration: underline;
		text-decoration-color: #ced4da;
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
		margin-top: 1rem;
		color: #ced4da;
		display: flex;
		align-items: center;
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
		color: #ced4da;
	}
</style>
