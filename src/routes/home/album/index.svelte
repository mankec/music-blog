<script lang="ts">
	import { base } from '$app/paths'
	import AddAlbum from '$root/components/add_album.svelte'
	import type { AlbumType } from '$root/types'

	export let albums: AlbumType[] = []
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
							<h2>{album.album_name}<span>({album.year_of_release})</span></h2></a
						>
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
		background-color: blue;
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
		margin-top: 2rem;
		padding-bottom: 0.1rem;
		border-bottom: 3px solid lime;
	}

	.fa-album-collection {
		font-size: 1.5em;
		color: greenyellow;
		margin-top: 2rem;
		margin-left: 1px;
		transform: translateY(-57%);
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
		margin-top: 2.5rem;
		margin-right: 2.5rem;
		list-style-type: none;
	}

	.artists li {
		margin-bottom: 1rem;
		display: flex;
		justify-content: flex-start;
	}

	.artists h2 {
		padding-top: 1.2rem;
		padding-bottom: 1.2rem;
		padding-left: 1.2rem;
		font-size: 2.4rem;

		display: inline-block;
	}

	.artists span {
		margin-left: 0.1em;
		color: black;
	}

	.artists a {
		width: 100%;
		height: auto;
		text-decoration: none;
		color: red;
		background-color: yellow;
		transition-timing-function: ease-in-out;
		transition-duration: 0.6s;

		display: flex;
		align-items: center;
	}

	.artists a:hover {
		background-color: rgba(255, 255, 0, 0.836);
	}

	.add-artist {
		width: 40%;
		height: 100%;
		margin: 0 auto;
		/* background-color: blue; */
	}
</style>
