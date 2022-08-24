<script lang="ts">
	import { base } from '$app/paths'
	import axios from 'axios'

	import AddGenreOrTrack from '$root/components/add_genre_or_track.svelte'
	import type { PageData } from '@sveltejs/kit/types/internal'

	export let data: PageData
	const album = data.album
	const genres = data.genres
	const tracks = data.tracks
	let album_cover: any
	let fileinput: any
	let files: any

	export function index(tracks: any, track: any) {
		return tracks.indexOf(track) + 1
	}

	function getBase64(image: any) {
		const reader = new FileReader()
		const r = reader.readAsDataURL(image)
		reader.onload = (e: any) => {
			album_cover = e.target.result
			// uploadFunction(e.target.result)
			sendJSON(e.target.result)
		}
	}

	async function uploadFunction(imgBase64: any) {
		const data: any = {}
		const imgData = imgBase64.split(',')
		data['image'] = imgData[1]
		let string: any = imgData[1]
		axios({
			method: 'post',
			url: '/api',
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

	function sendJSON(image: any) {
		// Creating a XHR object
		let xhr = new XMLHttpRequest()
		let url = `/home/album/${album.id}`

		// open a connection
		xhr.open('POST', url, true)

		// Set the request header i.e. which type of content you are sending
		xhr.setRequestHeader('Content-Type', 'application/json')

		// Create a state change callback
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				console.log('Sent data successfully')
			}
		}
		const data_img: any = {}
		const imgData = image.split(',')
		data_img['image'] = imgData[1]
		// Converting JSON data to string
		const data = JSON.stringify({ data_img })

		// Sending data with the request
		xhr.send(data)
	}
</script>

<div class="image-container">
	{#if album_cover}
		<img class="album-cover" src={album_cover} alt="" />
	{/if}
	{#if album.cover_img}
		<img
			class="album-cover"
			src="data:image/jpeg;base64,{album.cover_img}"
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
		on:change={() => getBase64(files[0])}
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
			<AddGenreOrTrack />
		</div>
	</div>
</div>

<style>
	.album-cover {
		width: 30rem;
		height: 30rem;
		display: inline;
		border-radius: 50%;

		/* position: absolute;
		top: 1.25rem;
		left: 3rem; */
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
