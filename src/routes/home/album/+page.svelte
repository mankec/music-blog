<script lang="ts">
	import { base } from '$app/paths'
	import type { PageData } from '@sveltejs/kit/types/internal'

	export let data: PageData
	const albums = data.albums
</script>

<div class="container">
	<div class="header">
		<h1>Albums</h1>
		<i class="fas fa-regular fa-album-collection" />
	</div>
	<div class="artists-add-artist">
		<div class="artists">
			<ul>
				{#each albums as album}
					<li>
						<!-- prettier-ignore -->
						<a href="{base}/home/album/{album.id}">
							<h2>{album.album_name}</h2></a
						><span>({album.year_of_release})</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
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

		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.header h1 {
		font-size: 3.2rem;
		margin-top: 1rem;
		padding-bottom: 0.1rem;
		padding-right: 0.8rem;
		color: #ced4da;
		border-bottom: 3px solid #66a80f;
	}

	.artists-add-artist {
		height: 100%;
		display: flex;
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

	.artists span {
		margin-left: 0.2em;
		font-size: 2.2rem;
		color: black;
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
</style>
