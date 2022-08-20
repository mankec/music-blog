<script lang="ts">
	import type { ArtistType } from '$root/types'
	import { enhance } from '$lib/form'
	import axios from 'axios'

	let album_name = ''
	let year_of_release = ''
	let album_cover = ''
	let fileInput: any
	let files: any
	let avatar: any

	export let artist: ArtistType

	function getBase64(image: any) {
		const reader = new FileReader()
		const r = reader.readAsDataURL(image)
		reader.onload = (e: any) => {
			avatar = e.target.result
			uploadFunction(e.target.result)
			// sendJSON(e.target.result)
		}
	}

	async function uploadFunction(imgBase64: any) {
		const data: any = {}
		const imgData = imgBase64.split(',')
		data['image'] = imgData[1]
		// console.log(data)
		// console.log(JSON.stringify(data))
		let string: any = imgData[1]
		console.log(string.length)
		axios({
			method: 'post',
			url: '/mb/api',
			data: {
				data
			}
			// transformRequest: [
			// 	function (data) {
			// 		const stream = Readable.from(data.toString())

			// 		return stream
			// 	}
			// ]
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
		let url = '/mb/api'

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
		var data = JSON.stringify({ data_img })

		// Sending data with the request
		xhr.send(data)
	}
</script>

<div class="albums-content-container">
	<form
		class="form"
		action=""
		method="post"
		autocomplete="off"
		use:enhance
	>
		<label for="add-artist">Add album</label>
		<div class="add-genre-track-flex">
			<input
				class="add-genre-track-input"
				aria-label="Add album name"
				bind:value={album_name}
				name="album_name"
				placeholder="Morrison Hotel"
				type="text"
			/>
			<input
				class="year-of-release"
				aria-label="Add year album's year of release"
				bind:value={year_of_release}
				name="year_of_release"
				placeholder="1970"
				type="text"
			/>
			<button type="submit" class="btn">
				<i class="fas fa-regular fa-square-plus" /></button
			>
		</div>
	</form>
	<!-- <input
		class="hidden"
		id="file-to-upload"
		type="file"
		accept=".png,.jpg"
		bind:files
		bind:this={fileInput}
		on:change={() => getBase64(files[0])}
	/>
	<button
		class="upload-btn"
		on:click={() => fileInput.click()}>Upload</button
	> -->
</div>

<style>
	label {
		margin-bottom: 3rem;
		font-size: 2.2rem;
		text-align: center;

		display: block;
	}

	.albums-content-container {
		margin-top: 1.25rem;
		margin-right: 1.25rem;
		height: 22rem;
		border: 4px solid white;
		border-radius: 1.6em;

		display: flex;
		justify-content: center;
		align-items: center;
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

	input[type='text'].add-genre-track-input {
		border: none;
		width: 40%;
		height: 100%;

		padding: 6px 8px;
		border: 1px solid #ccc;
		border-radius: 0.6em;
	}
	.fa-square-plus {
		color: greenyellow;
		font-size: 2.9em;
		height: 100%;
	}

	.add-genre-track-flex {
		margin-bottom: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}
	input[type='text'].year-of-release {
		border: none;
		width: 20%;
		height: 100%;

		padding: 6px 8px;
		border: 1px solid #ccc;
		border-radius: 0.6em;
	}
	.fa-square-plus {
		color: greenyellow;
		font-size: 2.9em;
		height: 100%;
	}

	.add-genre-track-flex {
		margin-bottom: 3rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	form {
		margin: 0 auto;
		width: 48rem;
	}

	input:focus {
		outline: 1px solid lime;
	}

	/* .container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#avatar {
		border-radius: 99999px;
		height: 128px;
		width: 128px;
		margin-bottom: 10px;
	}

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
	} */
</style>
