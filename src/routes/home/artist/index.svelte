<script lang="ts">
	import { base } from '$app/paths'
	import AddArtist from '$root/components/add_artist.svelte'
	import type { ArtistType } from '$root/types'

	export let artists: ArtistType[] = []
</script>

<div class="container">
	<div class="header">
		<h1>Artists</h1>
		<i class="fas fa-regular fa-music" />
	</div>
	<div class="artists-add-artist">
		<div class="artists">
			<ul>
				{#each artists as artist}
					<li>
						<a href="{base}/home/artist/{artist.id}">
							<h2>{artist.artist_name}</h2></a
						>
					</li>
				{/each}
			</ul>
		</div>
		<div class="add-artist">
			<AddArtist />
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

	.fa-music {
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
		width: 50%;
		height: 100%;
		/* background-color: blue; */
	}

	.artists ul {
		margin: 2.5rem;
		list-style-type: none;
	}

	.artists li {
		margin-bottom: 1rem;
		display: flex;
		justify-content: center;
	}

	.artists h2 {
		padding-top: 1.2rem;
		padding-right: 3.6rem;
		padding-bottom: 1.2rem;
		padding-left: 3.6rem;
		font-size: 2.4rem;
		text-align: center;

		display: inline-block;
	}

	.artists a {
		width: 23rem;
		height: auto;
		margin-right: 6rem;
		text-decoration: none;
		color: red;
		background-color: yellow;
		border-radius: 0.8em;
		transition-timing-function: ease-in-out;
		transition-duration: 0.6s;

		display: flex;
		justify-content: center;
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
