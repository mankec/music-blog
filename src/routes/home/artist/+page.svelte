<script lang="ts">
	import { base } from '$app/paths'
	import AddArtist from '$root/components/add_artist.svelte'
	import type { PageData } from '@sveltejs/kit/types/internal'
	import type { ArtistType } from '$root/types'
	// Suggestion (check code before using, and possibly convert to data.X access later):

	// export let data: PageData;
	// $: ({ error } = data);

	// export let artists: ArtistType[] = []

	export let data: PageData
	const artists = data.artists
</script>

<div class="container flex-between">
	<div class="header">
		<h1>Artists</h1>

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
	</div>
	<div class="add-artist">
		<AddArtist />
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

		align-self: flex-start;
	}

	.header h1 {
		margin-top: 0.6rem;
		padding-bottom: 0.1rem;
		padding-right: 0.8rem;
		font-size: 3.2rem;
		border-bottom: 3px solid #66a80f;

		display: inline-block;
	}

	.flex-between {
		display: flex;
		justify-content: space-between;
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
