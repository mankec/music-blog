<script lang="ts">
	import { base } from '$app/paths'
	import AddAlbum from '$root/components/add_album.svelte'
	import type { PageData } from '@sveltejs/kit/types/internal'

	export let data: PageData
	const artist = data.artist
	const albums = data.albums

	let fileInput
	let files
	let avatar

	function getBase64(image: any) {
		const reader = new FileReader()
		reader.readAsDataURL(image)
		reader.onload = (e: any) => {
			avatar = e.target.result
			uploadFunction(e.target.result)
		}
	}

	async function uploadFunction(imgBase64: any) {
		const data: any = {}
		const imgData = imgBase64.split(',')
		data['image'] = imgData[1]
		console.log(data)
		await fetch(`/api`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(data)
		})
	}
</script>

<div class="container flex-between">
	<div class="header">
		<h1>{artist.artist_name}</h1>
		<div class="artists">
			<ul>
				{#each albums as album}
					<li>
						<!-- prettier-ignore -->
						<a href="{base}/home/album/{album.id}">
              <h2>{album.album_name}<span>({album.year_of_release})</span></h2></a
            >
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="add-artist">
		<AddAlbum />
	</div>
</div>

<style>
	.flex-between {
		display: flex;
		justify-content: space-between;
	}

	.container {
		width: 68%;
		height: 100%;
		margin: 0 auto;
		/* background-color: blue; */
	}

	.header {
		width: 100%;
		height: auto;
		/* background-color: blue; */

		align-self: flex-start;
	}

	.header h1 {
		margin-top: 0.6rem;
		padding-bottom: 0.1rem;
		padding-right: 0.8rem;
		font-size: 3.2rem;
		color: #ced4da;
		border-bottom: 3px solid #66a80f;

		display: inline-block;
	}

	.artists {
		width: 100%;
		height: 100%;
	}

	.artists ul {
		margin-top: 4.2rem;
		margin-right: 2.5rem;
		list-style-type: none;
	}

	.artists li {
		margin-bottom: 1.4rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.artists h2 {
		font-size: 2.4rem;
	}

	.artists a:hover {
		text-decoration: underline;
	}

	.artists a {
		height: auto;
		text-decoration: none;
		color: #ced4da;
		/* background-color: yellow; */
		transition-timing-function: ease-in-out;
		transition-duration: 0.6s;
	}

	.add-artist {
		width: 40%;
		height: 100%;
		margin: 0 auto;
		/* background-color: blue; */
	}
</style>
